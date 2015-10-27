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

	return objMap(size, (s) => sizes[s]);
}

// Public: expands Card props to produce props for individual card elements
// (e.g. Tag, Title, ...)
const expandProps = (props) => {
	const expandedProps = {};

	expandedProps.tagSize = tagSize(props.size);
	expandedProps.titleSize = titleSize(props.size, props.order, props.image, props.article.primaryImage);
	expandedProps.showStandFirst = showStandFirst(props.size, props.standFirst);
	expandedProps.standFirstSize = standFirstSize(props.size);

	return Object.assign({}, props, expandedProps);
}

export default expandProps;
