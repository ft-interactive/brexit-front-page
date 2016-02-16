import React from 'react';
import ReactDOM from 'react-dom';
import { json as fetchJson } from 'fetchres';

import { crossDomainFetch } from 'n-jsonp';
import sessionClient from 'next-session-client';
import * as myFtUi from 'next-myft-ui';

import Section from '../../../shared/components/section';
import MyftPromo from '../../../shared/components/myft-promo/myft-promo';
import getSection from '../../../config/sections/index';

const query = `
	fragment Basic on Concept {
		type: __typename
		id
		name
		url
		taxonomy
		items(limit: 6) {
			id
			title
			primaryImage {
				rawSrc
			}
		}
	}

	query MyFT {
		popularTopics(limit: 3) {
			... Basic
		}
		user {
			viewed(limit: 3) {
				... Basic
			}
			followed(limit: 3) {
				... Basic
			}
		}
	}
`;

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

const filterDuplicateArticles = (articles, concept) => {
	concept.items = concept.items
		.filter(item => !articles.find(article => article.id === item.id))
		.slice(0, 2);
	return articles.concat(concept.items);
};

const handleResponse = (myftClient, flags, response) => {
	const { popularTopics, user: { viewed, followed }} = response;
	// flag up followed concepts
	followed.forEach(concept => concept.isFollowing = true);
	// displayed concepts are: followed concepts -> most viewed by this user -> general popular concepts
	const concepts = followed.concat(viewed, popularTopics)
		.filter(filterDuplicateConcepts)
		.slice(0, 3);
	concepts.reduce(filterDuplicateArticles, []);
	// get the section
	const section = getSection('myft', { main: concepts }, flags.getAll());
	// if there are already followed topics, update the promo
	if (followed.length) {
		section.layout.forEach(col =>
			col.components
				.reduce((prev, column) => prev.concat(column.components), [])
				.filter(card => card.type === MyftPromo)
				.map(card => Object.assign(card, { isMyftUser: true })
			)
		);
	}
	ReactDOM.render(<Section {...section} />, document.getElementById('myft'));
	myftClient
		.then(() => myFtUi.updateUi())
		.catch(errorHandler);
};

const loadSection = (myftClient, flags) => {
	if (flags.get('frontPageMyftSection') && flags.get('myFtApi') && sessionClient.cookie()) {
		crossDomainFetch(
			`https://next-graphql-api.ft.com/data?query=${slimQuery(query)}`,
			{ credentials: 'include' }
		)
			.then(fetchJson)
			.then(handleResponse.bind(undefined, myftClient, flags))
			.catch(errorHandler);
	}
};

export default {
	loadSection
}
