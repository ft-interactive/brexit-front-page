import React from 'react';
import ReactDOM from 'react-dom';

import Section from '.';
import getSections from '../../config/layout';

let showMostPopularByIndustry;
const layoutForSection = (layout, sectionId) => layout.find((section) => (section.id === sectionId));

function init (el, mostPopularByIndustry) {
	if (!el) return;
	showMostPopularByIndustry = mostPopularByIndustry;
	render(el);
}

function render (el) {
	let sectionContent = JSON.parse(el.getAttribute('data-section-content'));

	ReactDOM.render(
		<Section
			{...layoutForSection(getSections({ [el.id]: sectionContent }), el.id)}
			content={sectionContent}
			showMostPopularByIndustry={showMostPopularByIndustry}
			data-o-grid-colspan="12"/>,
		el
	);
}

export default {
	init,
	render
}
