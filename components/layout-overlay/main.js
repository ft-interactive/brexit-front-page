import React from 'react';
import ReactDOM from 'react-dom';

import LayoutOverlay from './layout-overlay';
import './main.scss';

function init(el) {
	if (!el) return;

	ReactDOM.render(<LayoutOverlay />, el);
}

export default {
	init: init
}
