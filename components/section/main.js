import React from 'react';
import ReactDOM from 'react-dom';

import Section from './section';
import initialLayout from '../layout/config';

let showMostPopularByIndustry;

const layoutForSection = (layout, sectionId) => layout.find((section) => (section.id === sectionId));

function init (el, mostPopularByIndustry) {
	if (!el) return;
	showMostPopularByIndustry = mostPopularByIndustry;
	render(el, initialLayout);

}

function render (el, layout) {

	let content = JSON.parse(el.getAttribute('data-section-content'));
	let sectionLayout = layoutForSection(layout, el.id);
	ReactDOM.render(<Section
		{...sectionLayout}
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
