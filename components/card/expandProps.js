import {objMap} from './helpers';

const layoutNames = ['S', 'M', 'L', 'XL'];

const cardPropDefaults = {
	size: { default: 'medium' },
	standFirst: { default: false },
	image:  { default: false },
	related:  { default: 0 },
	landscape:  { default: false },
	imageStick:  { default: false },
	show: { default: true }
};

const expandToAllLayouts = (property) => {
	const prop = Object.assign({}, property);
	layoutNames.reduce((largestValue, layoutName) => {
		if (!prop[layoutName]) {
			return prop[layoutName] = largestValue;
		} else {
			return prop[layoutName];
		}
	}, prop.default);
	return prop;
}

const titleSize = (size, cardIndex, image, primaryImage) => {
	if(+cardIndex > 0)
		return size;
	return objMap(size, (it, l) => (it === 'large' && (!image[l] || !primaryImage) ? 'huge' : it));
};

const standFirstSize = (size) => {
	const sizes = {
		large: 'large',
		medium: 'medium',
		small: 'medium'
	};

	return objMap(size, (s) => sizes[s] || 'medium');
};

const showStandFirst = (size, standFirst) => {
	return objMap(size, (size, layout) => (size === 'large' || size === 'medium' && !!standFirst[layout]));
};

const showRelated = (related, relatedContent) => {
	const relatedItems = relatedContent || [];
	const maxRelated = Object.keys(related).reduce((max, layout) => Math.max(max, +related[layout]), 0);

	return (Array.apply(null, {length: Math.min(relatedItems.length, maxRelated)})).map((it, i) => {
		return objMap(related, (count) => count > i);
	});
};


// Public: expands Card props to produce props for individual card elements
// (e.g. Tag, Title, ...)
const expandProps = (props) => {
	const expandedProps = {};
	const item = props.item || {};
	props = Object.assign({}, cardPropDefaults, props);

	expandedProps.size = expandToAllLayouts(props.size);
	expandedProps.image = expandToAllLayouts(props.image);

	//TODO: seems a bit odd to have this here, move elsewhere
	//Set card size to huge if first item has no image
	titleSize(expandedProps.size, props.cardIndex, expandedProps.image, item.primaryImage);

	expandedProps.showStandFirst = showStandFirst(props.size, props.standFirst);
	expandedProps.standFirstSize = standFirstSize(props.size);
	expandedProps.showRelated = showRelated(props.related, item.relatedContent);
	expandedProps.last = props.last;

	return Object.assign({}, props, expandedProps);
};

export default expandProps;
