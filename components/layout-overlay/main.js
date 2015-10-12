import React from 'react';
import ReactDOM from 'react-dom';

import LayoutOverlay from './layout-overlay';
import './main.scss';

import initialLayout from '../layout/config';

let element;
let callback;

function init(el, cb) {
	if (!el) return;

	element = el;
	callback = cb;

	render(initialLayout);
}

function render(layout) {
	ReactDOM.render(<LayoutOverlay layout={layout} onChange={callback} />, element);
}

export default {
	init: init,
	render: render
}
