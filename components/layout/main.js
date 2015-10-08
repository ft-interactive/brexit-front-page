import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';

function init(el, content) {
	if (!el) return;

	ReactDOM.render(<Layout content={content} />, el);
}

export default {
	init: init
}
