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

// Filters a responsive property for use with media queries
// e.g. {default: 1, S: 1, M: 2, L: 2, XL: 2} becomes {default: 1, M: 2}
const mobileFirst = (value) => {
	const cleanValue = {};
	const layouts = ['default'].concat(layoutNames).filter(it => value.hasOwnProperty(it));

	layouts.forEach((l, i) => {
		const previousValue = value[layouts[i - 1]];

		if(value[l] !== previousValue)
			cleanValue[l] = value[l];
	});

	return cleanValue;
}

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

	// first pass: assign card into requested column(s)
	layoutNames.forEach((layout) => {
		if(!layouts[layout] || !layouts[layout][storyIndex]) return;

		const card = layouts[layout][storyIndex];

		columns[card.column] = columns[card.column] || {};
		columns[card.column][layout] = card.width;
	});

	// second pass: set defaults and 'hide's for next layout up if present
	const existingColumns = (Object.keys(columns).length ? Object.keys(columns) : [0]);
	existingColumns.forEach((column, i) => {
		columns[column] = columns[column] || {};
		columns[column].default = (column === existingColumns[0] ? 12 : 'hide');

		const nextColumn = existingColumns[i + 1];
		if(!nextColumn) return;

		layoutNames.forEach((layout) => {
			if(columns[nextColumn][layout]) {
				columns[column][layout] = 'hide';
				return;
			}
		});
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

		card[prop] = mobileFirst(fullValue);
	});

	return card;
}

const showFromColspan = (span) => {
	const show = Object.keys(span).reduce((show, layout) => {
		show[layout] = (span[layout] !== 'hide');
		return show;
	}, {});

	return mobileFirst(show);
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

				const cardInstance = Object.assign({}, props, { article, show, colspan });
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
			return mobileFirst(span);
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
