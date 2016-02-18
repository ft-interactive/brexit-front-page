import React from 'react';
import ReactDOM from 'react-dom';
import { crossDomainFetch } from 'n-jsonp';
import { json as fetchJson } from 'fetchres';
import getDomPath from 'n-instrumentation/src/utils/getDomPath';
import Superstore from 'superstore';

import { mostPopular, popularArticles } from '../../../config/queries';
import getSection from '../../../config/sections/index';
import Section from '../../../shared/components/section/section';
import fireTracking from '../../utils/fire-tracking';

const store = new Superstore('local', 'next-frontpage');

const storeName = 'most-popular';

const changeHandler = (flags, ev, { track = true } = {}) => {
	const target = ev.target;
	const selected = target.value;
	const query = selected === 'initial' ? popularArticles : mostPopular('industry', `http://api.ft.com/things/${selected}`);
	// store the change
	if (selected === 'initial') {
		store.unset(storeName);
	} else {
		store.set(storeName, selected);
	}

	crossDomainFetch(
		`https://next-graphql-api.ft.com/data?query=${encodeURIComponent(query)}`,
		{ credentials: 'include' }
	)
		.then(fetchJson)
		.then(data => {
			const main = data[selected === 'initial' ? 'popularArticles' : 'popularFromHui'];
			const section = getSection('most-popular', { main }, flags.getAll());
			section.dynamicContent.selected = selected;
			ReactDOM.render(<Section {...section} />, document.getElementById('most-popular'));
			if (track) {
				fireTracking('oTracking.event', {
					category: 'cta',
					action: 'change',
					value: selected,
					title: section.dynamicContent.sources.find(source => source.uuid === selected).title,
					domPath: getDomPath(target, [])
				});
			}
		})
		.catch(err => {
			window.setTimeout(() => {
				throw err;
			});
		});
};

const init = flags => {
	if (!flags.get('mostPopularByIndustry')) {
		return;
	}
	const el = document.getElementById('most-popular');
	el.addEventListener('change', changeHandler.bind(null, flags));

	store.get(storeName)
		.then(storeValue => {
			if (storeValue) {
				const select = el.querySelector('.section-sources__select');
				select.value = storeValue;
				changeHandler(flags, { target: select }, { track: false });
			}
		});
};

export default init;
