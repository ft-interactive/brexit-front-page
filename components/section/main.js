import React from 'react';
import ReactDOM from 'react-dom';

import Section from './section';

function init (el) {
	if (!el) return;

	ReactDOM.render(<Section />, el);
}

export default {
	init: init
}
