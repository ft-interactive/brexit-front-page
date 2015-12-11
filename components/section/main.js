import React from 'react';
import ReactDOM from 'react-dom';

import Section from './section';
import initialLayout from '../../config/layout';
import cloneDeep from 'lodash.clonedeep';

let showMostPopularByIndustry;

const layoutForSection = (layout, sectionId) => layout.find((section) => (section.id === sectionId));

function init (el, mostPopularByIndustry) {
	if (!el) return;
	showMostPopularByIndustry = mostPopularByIndustry;
	render(el, initialLayout);

}

function render (el, layout) {

	let content = JSON.parse(el.getAttribute('data-section-content'));
	const sectionLayout = layoutForSection(layout, el.id);
	let layoutWithOverrides = cloneDeep(layoutForSection(layout, el.id));

	if(sectionLayout.overrides) {
		sectionLayout.overrides.forEach((override) => {
			if(override.condition(content.body)) {
				Object.assign(layoutWithOverrides.cards, override.cards);
			}
		});
	}
	ReactDOM.render(<Section
		{...layoutWithOverrides}
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
