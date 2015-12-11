import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layout';
import initialLayout from './config';

let element;
let content;
let showMostPopularByIndustry;

function init (el, initialContent, mostPopularByIndustry) {
	if (!el) return;
	element = el;
	content = initialContent;
	showMostPopularByIndustry = mostPopularByIndustry;
	render(initialLayout);
}

function render (layout) {
	ReactDOM.render(<Layout content={content} layout={layout} showMostPopularByIndustry={showMostPopularByIndustry}/>, element);
}

export default {
	init: init,
	render: render
}
