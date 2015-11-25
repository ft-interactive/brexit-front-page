import {objMap} from './helpers';

const titleSize = (size, order, image, primaryImage) => {
	if(+order > 0)
		return size;

	return objMap(size, (it, l) => (it === 'large' && (!image[l] || !primaryImage) ? 'huge' : it));
};

const showStandFirst = (size, standFirst) => {
	return objMap(size, (size, layout) => (size === 'large' || size === 'medium' && !!standFirst[layout]));
};

const standFirstSize = (size) => {
	const sizes = {
		large: 'large',
		medium: 'medium',
		small: 'medium'
	};

	return objMap(size, (s) => sizes[s] || 'medium');
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

	expandedProps.tagSize = expandedProps.titleSize = titleSize(props.size, props.order, props.image, item.primaryImage);
	expandedProps.showStandFirst = showStandFirst(props.size, props.standFirst);
	expandedProps.standFirstSize = standFirstSize(props.size);
	expandedProps.showRelated = showRelated(props.related, item.relatedContent);
	expandedProps.last = props.last;

	return Object.assign({}, props, expandedProps);
};

export default expandProps;
