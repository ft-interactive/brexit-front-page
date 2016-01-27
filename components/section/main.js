import React from 'react';
import ReactDOM from 'react-dom';

import Section from '.';
import getSection from '../../config/sections/index';

const init = (el, content, flags) => {
	if (!el) {
		return;
	}
	const section = getSection(el.id, content, flags);

	ReactDOM.render(<Section {...section} />, el);
};

export default {
	init
}
