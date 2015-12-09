import React from 'react';
import ReactDOM from 'react-dom';

import Section from './section';
import initialLayout from '../layout/config';

let element;
let content;
let layout;


function init (el) {
	if (!el) return;
	const sectionId = el.id;
	element = el;
	layout = initialLayout.find((section) => (section.id === sectionId));
	content = JSON.parse(el.getAttribute('data-section-content'));

	render();

}

function render () {

	ReactDOM.render(<Section
		{...layout}
		content={content.body}
		sidebarContent={content.sidebar}
		data-o-grid-colspan="12"/>,
	element);
}

export default {
	init: init
}
