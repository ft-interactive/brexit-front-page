import React from 'react';
import ReactDOM from 'react-dom';

import Section from '.';
import getSections from '../../config/layout';

const layoutForSection = (layout, sectionId) => layout.find((section) => (section.id === sectionId));

function init (el, content, flags) {
	if (!el) return;

	console.log(layoutForSection(getSections({ [el.id]: content }, flags))
	ReactDOM.render(
		<Section
			{...layoutForSection(getSections({ [el.id]: content }, flags), el.id)}
			data-o-grid-colspan="12" />,
		el
	);
}

export default {
	init
}
