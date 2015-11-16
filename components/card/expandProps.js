import {objMap} from './helpers';

const tagSize = (size) => {
	const sizes = {
		large: 'large',
		medium: 'large',
		small: 'medium',
		tiny: 'small'
	}

	return objMap(size, (s) => sizes[s]);
}

const titleSize = (size, order, image, primaryImage) => {
	if(+order > 0)
		return size;

	return objMap(size, (it, l) => (it === 'large' && (!image[l] || !primaryImage) ? 'huge' : it));
}

const showStandFirst = (size, standFirst) => {
	return objMap(size, (size, layout) => (size === 'large' || size === 'medium' && !!standFirst[layout]));
};

const standFirstSize = (size) => {
	const sizes = {
		large: 'large',
		medium: 'medium',
		small: 'medium'
	}

	return objMap(size, (s) => sizes[s] || 'medium');
}

const showRelated = (related, relatedContent) => {
	const relatedItems = relatedContent || [];
	const maxRelated = Object.keys(related).reduce((max, layout) => Math.max(max, +related[layout]), 0);

	return (Array.apply(null, {length: Math.min(relatedItems.length, maxRelated)})).map((it, i) => {
		return objMap(related, (count) => count > i);
	});
}

const isLandscape = size => {
	const isLandscape = {};
	Object.keys(size).forEach(breakPoint => {
		const acceptedBreakPoint = ['S', 'default'].indexOf(breakPoint) > -1;
		const acceptedSizeBreakPoint = ['tiny', 'small', 'medium'].indexOf(size[breakPoint]) > -1;
		isLandscape[breakPoint] = (acceptedBreakPoint && acceptedSizeBreakPoint);
	});
	return isLandscape;
}

// Public: expands Card props to produce props for individual card elements
// (e.g. Tag, Title, ...)
const expandProps = (props) => {
	const expandedProps = {};
	const article = props.article || {};

	expandedProps.tagSize = tagSize(props.size);
	expandedProps.titleSize = titleSize(props.size, props.order, props.image, article.primaryImage);
	expandedProps.showStandFirst = showStandFirst(props.size, props.standFirst);
	expandedProps.standFirstSize = standFirstSize(props.size);
	expandedProps.showRelated = showRelated(props.related, article.relatedContent);
	expandedProps.last = props.last;
	expandedProps.isLandscape = isLandscape(props.size);

	return Object.assign({}, props, expandedProps);
}

export default expandProps;
