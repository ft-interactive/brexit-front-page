/* eslint no-unused-vars: 1 */

import React from 'react';
import ReactDOM from 'react-dom';
import FastFtFeed from './fastftfeed';
import Feed from '../feed/feed';

import './main.scss';

const renderFeed = (el, items) => {
	ReactDOM.render(<FastFtFeed items={items} />, el);
}

const init = el => {
	if(!el) return;

	const initialItems = JSON.parse(el.getAttribute('data-fastft-articles'));
	let items = null;

	renderFeed(el, initialItems);

	const poller = () => {
		fetch('/home/fastft.json', {credentials: 'include'})
		.then((response) => {
			if(response.status > 200) {
				throw new Error('Bad response from server');
			}

			return response.json();
		})
		.then((fastft) => {
			items = fastft.items;

			if(document.visibilityState !== 'hidden') {
				if(items && items.length > 1)
					renderFeed(el, items);
			}
		})
		.catch((error) => {
			console.log(error);
		});
	};

	document.addEventListener('visibilitychange', function() {
		if(document.visibilityState === 'visible') {
			if(items && items.length > 1)
				renderFeed(el, items);
		}
	});

	setInterval(poller, 60000);
};

export default {
	init: init,
	FastFtFeed: FastFtFeed
};
