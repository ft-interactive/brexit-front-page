import React from 'react';
import ReactDOM from 'react-dom';
import { json as fetchJson } from 'fetchres';
import Superstore from 'superstore';
import oDate from 'o-date';
import getDomPath from 'n-instrumentation/src/utils/getDomPath';
import { crossDomainFetch } from 'n-jsonp';

import { mostPopular, popularArticles } from '../../../config/queries';
import getSection from '../../../config/sections/index';
import Section from '../../../shared/components/section/section';
import fireTracking from '../../utils/fire-tracking';

const store = {
	name: 'most-popular',
	storage: new Superstore('local', 'next-frontpage')
};

const handleError = (el, err) => {
	el.removeAttribute('disabled');
	window.setTimeout(() => {
		throw err;
	});
};

const updateSection = (el, selected, track, flags, data) => {
	if (data && (data.popularArticles || data.popularFromHui)) {
		const main = data[selected === 'initial' ? 'popularArticles' : 'popularFromHui'];
		const section = getSection('most-popular', { main }, flags.getAll());
		section.dynamicContent.selected = selected;
		const sectionComponent = ReactDOM.render(<Section {...section} />, document.getElementById('most-popular'));
		oDate.init(ReactDOM.findDOMNode(sectionComponent));
		if (track) {
			fireTracking('oTracking.event', {
				category: 'cta',
				action: 'change',
				value: selected,
				title: section.dynamicContent.sources.find(source => source.uuid === selected).title,
				domPath: getDomPath(el, [])
			});
		}
	}
	el.removeAttribute('disabled');
};

const changeHandler = (flags, ev, { track = true } = {}) => {
	const target = ev.target;
	const selected = target.value;
	const query = selected === 'initial' ? popularArticles : mostPopular('industry', `http://api.ft.com/things/${selected}`);
	// store the change
	if (selected === 'initial') {
		store.storage.unset(store.name);
	} else {
		store.storage.set(store.name, selected);
	}
	target.setAttribute('disabled', 'disabled');

	crossDomainFetch(
		`https://next-graphql-api.ft.com/data?query=${encodeURIComponent(query)}`,
		{ credentials: 'include', timeout: 5000 }
	)
		.then(fetchJson)
		.then(updateSection.bind(null, target, selected, track, flags))
		.catch(handleError.bind(null, target));
};

export default flags => {
	const el = document.getElementById('most-popular');
	if (!flags.get('mostPopularByIndustry') || !el || !el.querySelector('.section-sources__select')) {
		return;
	}
	el.addEventListener('change', changeHandler.bind(null, flags));

	store.storage.get(store.name)
		.then(storeValue => {
			if (storeValue) {
				const select = el.querySelector('.section-sources__select');
				select.value = storeValue;
				changeHandler(flags, { target: select }, { track: false });
			}
		});
}
