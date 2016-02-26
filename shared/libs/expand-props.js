const layoutNames = ['S', 'M', 'L', 'XL', 'XXL'];

const cardPropDefaults = {
	size: 'medium',
	standFirst: { default: false },
	image:  { default: false },
	related:  { default: 0 },
	landscape:  { default: false },
	imageStick:  { default: false },
	show: { default: true }
};

const expandToAllLayouts = property => {
	const prop = Object.assign({}, property);
	layoutNames.reduce((largestValue, layoutName) => {
		if (typeof prop[layoutName] === 'undefined') {
			return prop[layoutName] = largestValue;
		} else {
			return prop[layoutName];
		}
	}, prop.default);

	return prop;
};

// Public: expands Card props to produce props for individual card elements
// (e.g. Tag, Title, ...)
export default props => {
	const expandedProps = {};
	const item = props.item || {};
	props = Object.assign({}, cardPropDefaults, props);

	expandedProps.image = expandToAllLayouts(props.image);
	expandedProps.showStandFirst = expandToAllLayouts(props.standfirst);
	expandedProps.last = props.last;

	if (['large', 'huge'].indexOf(props.size) >= 0 && !item.primaryImage) {
		expandedProps.size = 'large-no-image';
	} else {
		expandedProps.size = props.size;
	}

	return Object.assign({}, props, expandedProps);
};
