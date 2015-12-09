import React from 'react';
import ReactDOM from 'react-dom';

import Section from './section';
import initialLayout from '../layout/config';

let element;
let content;
let layout;
let showMostPopularByIndustry;


function init (el, mostPopularByIndustry) {
	if (!el) return;
	const sectionId = el.id;
	element = el;
	layout = initialLayout.find((section) => (section.id === sectionId));
	content = JSON.parse(el.getAttribute('data-section-content'));
	showMostPopularByIndustry = mostPopularByIndustry;
	render();

}

function render () {

	ReactDOM.render(<Section
		{...layout}
		content={content.body}
		sidebarContent={content.sidebar}
		showMostPopularByIndustry={showMostPopularByIndustry}
		data-o-grid-colspan="12"/>,
	element);
}

export default {
	init: init
}
