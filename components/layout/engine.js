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

	// first pass: assign card into requested column(s)
	layoutNames.forEach((layout) => {
		if(!layouts[layout] || !layouts[layout][storyIndex]) return;

		const card = layouts[layout][storyIndex];

		columns[card.column] = (columns[card.column] || {});
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
		card[prop] = {default: defaultValue};

		layoutNames.forEach((l) => {
			if(!layout[l])
				return;

			const value = (layout[l][storyIndex] && layout[l][storyIndex][prop] || cardPropDefaults[prop]);

			// as we're mobile first, there's no need to override something already
			// set for a lower layout
			const keys = Object.keys(card[prop]);
			const previousValue = card[prop][keys[keys.length-1]];
			if(value !== previousValue)
				card[prop][l] = value;
		});
	});

	return card;
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
				columns[column] = columns[column] || [];

				const cardInstance = Object.assign({}, props, {article: article, colspan: spans[column] });
				columns[column].push(cardInstance);
			}
		};
	}

	return columns;
}

export default {
	cardPropValues,
	cardPropDefaults,
	maximumCards,
	colspans,
	cardProps,
	buildColumns
};
