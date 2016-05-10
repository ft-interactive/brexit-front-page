import { json as fetchJson } from 'fetchres';
import React from 'react';
import ReactDOM from 'react-dom';

import { crossDomainFetch } from 'n-jsonp';
import * as myFtUi from 'next-myft-ui';
import sessionClient from 'next-session-client';

import getSection from '../../../config/sections/index';
import { user as query } from '../../../config/queries';
import MyftPromo from '../../../shared/components/myft-promo/myft-promo';
import components from '@financial-times/n-section';

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
		.slice(0, 4);

	return articles.concat(concept.items);
};

// if there is one followed topic then convert promo card; if two or more then replace with a content card
const convertToContent = (shouldConvert, card) => {
	if (card.type === 'MyftPromo') {
		return shouldConvert ? Object.assign({}, card, { isMyftUser: true }) : Object.assign({}, card, { type: 'Content' });
	} else {
		return card;
	}
};

// recursively seek innermost components and call conversion function
const changeComponent = (shouldConvert, component) =>
	component.components ?
		Object.assign({}, component, { components: component.components.map(changeComponent.bind(null, shouldConvert)) }) :
		convertToContent(shouldConvert, component);

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
	const section = getSection('myft', { content: concepts }, flags.getAll());

	// if there is one or more followed topics
	if (followed.length) {
		section.layout = section.layout.map(changeComponent.bind(null, followed.length < 2));
	}

	ReactDOM.render(<components.Section {...section} />, myFtContainerEl);
	myftClient
		.then(() => myFtUi.updateUi())
		.catch(errorHandler);
};

export default (myftClient, flags) => {
	const myFtContainerEl = document.getElementById('myft');
	if (myFtContainerEl && flags.get('myFtApi') && flags.get('frontPageMyFtSection') && sessionClient.cookie()) {
		components.MyftPromo = MyftPromo;
		sessionClient.uuid()
			.then(response => {
				crossDomainFetch(
					`https://next-graphql-api.ft.com/data?query=${slimQuery(query)}&variables={"uuid":"${response.uuid}"}`,
					{ credentials: 'include', timeout: 5000 }
				)
					.then(fetchJson)
					.then(handleResponse.bind(undefined, myFtContainerEl, myftClient, flags))
					.catch(errorHandler);

			})
			.catch(errorHandler);
	}
}
