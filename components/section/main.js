import React from 'react';
import ReactDOM from 'react-dom';

import Section from '.';
import getSections from '../../config/layout';

const layoutForSection = (layout, sectionId) => layout.find((section) => (section.id === sectionId));

function init (el, content, opts = {}) {
	if (!el) return;

	const { mostPopularByIndustry } = opts;
	ReactDOM.render(
		<Section
			{...layoutForSection(getSections({ [el.id]: content }), el.id)}
			showMostPopularByIndustry={mostPopularByIndustry}
			data-o-grid-colspan="12" />,
		el
	);
}

export default {
	init
}
