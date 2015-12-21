import React from 'react';
import ReactDOM from 'react-dom';

import Section from '.';
import initialLayout from '../../config/layout';

let showMostPopularByIndustry;
const layoutForSection = (layout, sectionId) => layout.find((section) => (section.id === sectionId));

function init (el, mostPopularByIndustry) {
	if (!el) return;
	showMostPopularByIndustry = mostPopularByIndustry;
	render(el, initialLayout);
}

function render (el, layout) {

	let content = JSON.parse(el.getAttribute('data-section-content'));

	ReactDOM.render(<Section
		{...layoutForSection(layout, el.id)}
		content={content.body}
		sidebarContent={content.sidebar}
		showMostPopularByIndustry={showMostPopularByIndustry}
		data-o-grid-colspan="12"/>,
	el);
}

export default {
	init,
	render
}
