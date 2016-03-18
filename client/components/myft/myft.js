import { json as fetchJson } from 'fetchres';
import React from 'react';
import ReactDOM from 'react-dom';

import { crossDomainFetch } from 'n-jsonp';
import * as myFtUi from 'next-myft-ui';
import sessionClient from 'next-session-client';

import getSection from '../../../config/sections/index';
import { user as query } from '../../../config/queries';
import Content from '../../../shared/components/content/content';
import MyftPromo from '../../../shared/components/myft-promo/myft-promo';
import Section from '../../../shared/components/section/section';

// condense multiple spaces to one
const slimQuery = query => encodeURIComponent(query.replace(/\s+/g, ' '));

const errorHandler = err => {
	window.setTimeout(() => {
		throw err;
	});
};

const filterDuplicateConcepts = (concept, index, allConcepts) =>
	// ideally use findIndex, but not polyfilled for BB - https://github.com/Financial-Times/polyfill-service/pull/582
	allConcepts.map(allConcept => allConcept.id).indexOf(concept.id) === index;

const filterEmptyConcepts = concept => concept.items.length;

const filterDuplicateArticles = (articles, concept) => {
	concept.items = concept.items
		.filter(item => !articles.find(article => article.id === item.id))
		.slice(0, 2);

	return articles.concat(concept.items);
};

const mapCards = (length, card) => {
	return length > 1 ? Object.assign(card, { type: Content }) : Object.assign(card, { isMyftUser: true })
}

const handleResponse = (myFtContainerEl, myftClient, flags, response) => {
	const { popularTopics, user: { viewed, followed }} = response;
	// flag up followed concepts
	followed.forEach(concept => concept.isFollowing = true);
	// displayed concepts are: followed concepts -> most viewed by this user -> general popular concepts
	const concepts = followed.concat(viewed, popularTopics)
		.filter(filterDuplicateConcepts)
		.filter(filterEmptyConcepts)
		.slice(0, 4);
	concepts.reduce(filterDuplicateArticles, []);
	// get the section
	const section = getSection('myft', { main: concepts }, flags.getAll());
	// if there are already followed topics, update the promo
	if (followed.length) {
		section.layout.forEach(col =>
			col.components
				.reduce((prev, column) => prev.concat(column.components), [])
				.filter(card => card.type === MyftPromo)
				.map(mapCards.bind(null, followed.length))
		);
	}

	ReactDOM.render(<Section {...section} />, myFtContainerEl);
	myftClient
		.then(() => myFtUi.updateUi())
		.catch(errorHandler);
};

export default (myftClient, flags) => {
	const myFtContainerEl = document.getElementById('myft');
	if (myFtContainerEl && flags.get('frontPageMyftSection') && flags.get('myFtApi') && sessionClient.cookie()) {
		crossDomainFetch(
			`https://next-graphql-api.ft.com/data?query=${slimQuery(query)}`,
			{ credentials: 'include', timeout: 5000 }
		)
			.then(fetchJson)
			.then(handleResponse.bind(undefined, myFtContainerEl, myftClient, flags))
			.catch(errorHandler);
	}
}
