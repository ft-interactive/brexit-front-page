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
	const definedLayouts = Object.keys(layouts);

	// first pass: assign card into columns as requested

	definedLayouts.forEach((layout) => {
		if(!layouts[layout][storyIndex]) return;

		const card = layouts[layout][storyIndex];
		const column = card.column || 0;
		const width = card.width || 12;

		columns[column] = columns[column] || {};
		columns[column][layout] = width;
	});

	// second pass: add defaults and 'hide's

	// add 'default' to layouts if it's missing
	if(definedLayouts[0] !== 'default') definedLayouts.unshift('default');

	// existing columns = columns card is visible in,
	// first one should be default 12 unless explicitly hidden
	const requestedColumns = Object.keys(columns);

	if(requestedColumns.length > 1) {
		const firstColumnLayouts = Object.keys(columns[requestedColumns[0]]);
		if(firstColumnLayouts.length < 2 && firstColumnLayouts[0] === 'default') {
			columns[requestedColumns[1]].default = columns[requestedColumns[0]].default;
			delete columns[requestedColumns[0]];
		}
	}

	const existingColumns = Object.keys(columns);

	// if there is an explicit default layout and it doesn't have the card
	// hide the card in default
	if(layouts.default && !layouts.default[storyIndex])
		columns[existingColumns[0]].default = 'hide';

	existingColumns.forEach((column, i) => {
		columns[column].default = columns[column].default || (i === 0 ? 12 : 'hide');
		columns[column].default = columns[column].default === 'hide' ? columns[column].default : 12;

		definedLayouts.forEach((layout) => {
			if(columns[column][layout]) return;

			if(!layouts[layout][storyIndex])
				columns[column][layout] = 'hide';

			// hide in all the layouts defined in any of the other columns
			existingColumns.forEach((c) => {
				if(column === c) return;

				if(columns[c][layout] || !layouts[layout][storyIndex])
					columns[column][layout] = 'hide';
			});
		})
	});

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
const buildColumns = (layouts, articles) => {
	const maxCards = maximumCards(layouts);
	const columns = [];

	for(let storyIndex = 0; storyIndex < maxCards; storyIndex++) {
		const spans = colspans(layouts, storyIndex);
		const props = cardProps(layouts, storyIndex);
		const article = articles[storyIndex];

		for(const column in spans) {
			if(spans.hasOwnProperty(column)) {
				columns[column] = columns[column] || {cards: []};
				const colspan = spans[column];
				const show = showFromColspan(colspan);

				const cardInstance = Object.assign({}, props, { article, show, colspan, order: storyIndex });
				columns[column].cards.push(cardInstance);
			}
		};
	}

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
