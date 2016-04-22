const breakpoints = ['default', 'S', 'M', 'L', 'XL', 'XXL'];

const pagePadding = {
	default: 10,
	S: 50,
	M: 45
};

const cardPaddings = {
	default: 30,
	M: 35
};

const imageWidth = {
	'top': 1,
	'bottom': 1,
	'left': 0.4,
	'right': 0.5
};

const maxPageSize = 1425;

const getSize = (pagePadding, cardPadding, colspan, position) => {
	const colRatio = colspan / 12;
	const imageRatio = imageWidth[position];
	const relativeWidth = 100 * colRatio * imageRatio;
	const pixelPadding = ((pagePadding * colRatio) + cardPadding) * imageRatio;
	return `calc(${+relativeWidth.toFixed(3)}vw - ${pixelPadding}px)`;
};

const getMaxSize = (colspan, position) => {
	const colRatio = colspan / 12;
	const imageRatio = imageWidth[position];
	const size = ((maxPageSize * colRatio) - 35) * imageRatio;
	return `${+size.toFixed(3)}px`;
};

export default (colspan, position) => {
	let currentPagePadding;
	let currentCardPadding;
	let currentColspan;
	let currentPosition;
	let currentSize;

	return breakpoints.reduce((sizes, breakpoint) => {
		const newPagePadding = pagePadding[breakpoint];
		const newCardPadding = cardPaddings[breakpoint];
		const newColspan = colspan[breakpoint];
		const newPosition = position[breakpoint];
		if (
			(newPagePadding && newPagePadding !== currentPagePadding) ||
			(newCardPadding && newCardPadding !== currentCardPadding) ||
			(newColspan && newColspan !== currentColspan) ||
			(newPosition && newPosition !== currentPosition) ||
			breakpoint === 'XXL'
		) {
			currentPagePadding = newPagePadding || currentPagePadding;
			currentCardPadding = newCardPadding || currentCardPadding;
			currentColspan = newColspan || currentColspan;
			currentPosition = newPosition || currentPosition;
			const size = breakpoint === 'XXL' ?
				getMaxSize(currentColspan, currentPosition) :
				getSize(currentPagePadding, currentCardPadding, currentColspan, currentPosition);
			if (size !== currentSize) {
				currentSize = sizes[breakpoint] = size;
			}
		}

		return sizes;
	}, {});
};
