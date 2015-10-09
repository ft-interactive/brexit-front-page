import React from 'react';
import ReactDOM from 'react-dom';

import LayoutOverlay from './layout-overlay';
import './main.scss';

import initialLayout from '../layout/config';

function init(el, callback) {
	if (!el) return;

	ReactDOM.render(<LayoutOverlay layout={initialLayout} onChange={callback} />, el);
}

export default {
	init: init
}
