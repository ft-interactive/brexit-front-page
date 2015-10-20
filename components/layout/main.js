import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layout';
import initialLayout from './config';

let element;
let content;

function init (el, initialContent) {
	if (!el) return;
	element = el;
	content = initialContent;

	render(initialLayout);
}

function render (layout) {
	ReactDOM.render(<Layout content={content} layout={layout} />, element);
}

export default {
	init: init,
	render: render
}
