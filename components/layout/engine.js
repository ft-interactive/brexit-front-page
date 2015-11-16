const layoutNames = ['S', 'M', 'L', 'XL'];

const cardPropKeys = ['size', 'standFirst', 'image', 'related'];
const cardPropValues = {
	size: ['large', 'medium', 'small', 'tiny'],
	standFirst: [false, true],
	image: [false, true],
	related: [0, 1, 2, 3, 4, 5]
};
const cardPropDefaults = {
	size: 'medium',
	standFirst: false,
	image: false,
	related: 0
};

// Finds the maximum number of cards and columns in all layouts
const maximumCards = (layouts) => {
	return layoutNames.concat(['default']).reduce((count, layout) => {
		const layoutCards = layouts[layout];
		if(!layoutCards) return count;

		return Math.max(count, layoutCards.length);
	}, 0);
}

// Computes colspan for a given card merging widths from all layouts.
// This may assign one card into multiple columns, rendering it twice
const colspans = (layouts, storyIndex) => {
	const columns = {}; // column -> colspan
	const definedLayouts = ['default'].concat(layoutNames.filter(it => !!layouts[it]));
	const cardNotInDefault = layouts.default && !layouts.default[storyIndex];

	// first pass: assign card into columns as requested

	definedLayouts.forEach((layout) => {
		if(!layouts[layout] || !layouts[layout][storyIndex]) return;

		const card = layouts[layout][storyIndex];
		const column = card.column || 0;
		const width = card.width || 12;

		columns[column] = columns[column] || {};
		columns[column][layout] = width;
	});

	// second pass: move lone defaults a column up to avoid placing always hidden cards

	const requestedColumns = Object.keys(columns);
	if(requestedColumns.length > 1) {
		const firstColumn = requestedColumns[0];
		const secondColumn = requestedColumns[1];
		const firstColumnLayouts = Object.keys(columns[firstColumn]);

		if(firstColumnLayouts.length < 2 && firstColumnLayouts[0] === 'default') {
			columns[secondColumn].default = columns[firstColumn].default;

			delete columns[firstColumn];
		}
	}

	// third pass: 'hide' cards already handled in other layouts and set defaults

	const existingColumns = Object.keys(columns);
	existingColumns.forEach((column, i) => {
		// default layout for the column is 12 for the first column,
		// hide for others or cards skipped in default
		columns[column].default = ((i !== 0 || cardNotInDefault) ? 'hide' : 12);

		// for layouts apart from default
		definedLayouts.slice(1).forEach((layout) => {
			if(columns[column][layout]) return;

			const cardNotDefined = !layouts[layout][storyIndex];
			// yes, this is a very nested loop but they are quite small constants -
			// the some callback runs 50 times total for the complex layout example
			const coveredInOtherColumn = existingColumns.some((c) => (c !== column && columns[c][layout]));

			if(cardNotDefined || coveredInOtherColumn)
				columns[column][layout] = 'hide';
		});
	});

	// finally, done.

	return columns;
};

// Invert the prop definition from layout first, to prop first for a card
const cardProps = (layout, storyIndex) => {
	const card = {};
	const defaultLayout = layout.default[storyIndex];

	cardPropKeys.forEach((prop) => {
		const defaultValue = (defaultLayout && defaultLayout[prop] ? defaultLayout[prop] : cardPropDefaults[prop]);
		const fullValue = {default: defaultValue};

		layoutNames.forEach((l) => {
			if(!layout[l]) return;

			const value = (layout[l][storyIndex] && layout[l][storyIndex][prop] || cardPropDefaults[prop]);
			fullValue[l] = value;
		});

		card[prop] = fullValue;
	});

	return card;
}

const showFromColspan = (span) => {
	const show = Object.keys(span).reduce((show, layout) => {
		show[layout] = (span[layout] !== 'hide');
		return show;
	}, {});

	return show;
}

// Builds a list of columns containing cards.
// Each column contains cards that fall into the column on any of the layouts,
// therefore at the front of the column there may be cards that are hidden on
// smaller layouts (as they moved to previous column),
// at the end there may be cards that are hidden on larger layouts
// (as they moved to next column)
const buildColumns = (layouts, items) => {
	const maxCards = maximumCards(layouts);
	const columns = [];

	// place each card to its requested column or columns
	for(let storyIndex = 0; storyIndex < maxCards; storyIndex++) {
		const spans = colspans(layouts, storyIndex);
		const props = cardProps(layouts, storyIndex);
		const item = items[storyIndex];

		// put the card into each of the columns we need it in
		for(const column in spans) {
			if(spans.hasOwnProperty(column)) {
				columns[column] = columns[column] || {cards: []};
				const colspan = spans[column];
				const show = showFromColspan(colspan);

				const cardInstance = Object.assign({}, props, { item, show, colspan, order: storyIndex });
				columns[column].cards.push(cardInstance);
			}
		};
	}

	// derive colspans by taking non-hide values from each layout of every card
	// (they will be the same)
	columns.forEach((column, cidx) => {
		const colspan = column.cards.reduce((span, card) => {
			Object.keys(card.colspan).forEach((layout) => {
				if(!span[layout] || span[layout] === 'hide')
					span[layout] = card.colspan[layout];
			});

			delete card.colspan;

			return span;
		}, {});

		columns[cidx].colspan = colspan;
	});

	// mark last card in each column on each layout for CSS
	columns.forEach((column) => {
		column.cards = column.cards.map((card, i) => {
			const nextCard = column.cards[i + 1];
			if(!nextCard) return Object.assign(card, {last: card.show});

			const isLastCard = ['default'].concat(layoutNames).reduce((last, l) => {
				if(!card.show.hasOwnProperty(l)) return last;

				last[l] = card.show[l] && !nextCard.show[l];
				return last;
			}, {});

			// only put the prop if it affects anything.
			if(Object.keys(isLastCard).some((l) => isLastCard[l])) {
				card.last = isLastCard;
			}

			return card;
		});
	});

	return columns;
}

export default {
	layoutNames,
	cardPropValues,
	cardPropDefaults,
	maximumCards,
	colspans,
	cardProps,
	buildColumns
};
