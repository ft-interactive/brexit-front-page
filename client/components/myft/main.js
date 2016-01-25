import { json as fetchJson } from 'fetchres';

import nJsonpFetch from 'n-jsonp-fetch';
import sessionClient from 'next-session-client';
import * as myFtUi from 'next-myft-ui';

import section from '../../../components/section/main';

const query = `
    fragment Basic on Concept {
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

const createFetch = url => {
    const fetchFn = ('XDomainRequest' in window) ? nJsonpFetch : fetch;
    return fetchFn(url, {
        credentials: 'include'
    });
};

const filterDuplicateConcepts = (concept, index, allConcepts) =>
    allConcepts.findIndex(allConcept => concept.id === allConcept.id) === index;

const filterDuplicateArticles = (articles, concept) => {
    concept.items = concept.items
        .filter(item =>
            !articles.find(article => article.id === item.id)
        )
        .slice(0, 2);
    return articles.concat(concept.items);
};

const handleResponse = (myftClient, flags, response) => {
    const { popularTopics, user: { viewed, followed } } = response;
    // flag up followed concepts
    followed.forEach(concept => concept.isFollowing = true);
    // displayed concepts are: followed concepts -> most viewed by this user -> general popular concepts
    const concepts = followed.concat(viewed, popularTopics)
        .filter(filterDuplicateConcepts)
        .slice(0, 3);
    concepts.reduce(filterDuplicateArticles, []);
    section.init(document.getElementById('myft'), { main: concepts }, flags.getAll());
    // only update ui after we've got a response from myft
    myftClient
        .then(() => myFtUi.updateUi())
        .catch(noop);
};

const noop = () => { };

const loadSection = (myftClient, flags) => {
    if (flags.get('frontPageMyftSection') && flags.get('myFtApi') && sessionClient.cookie()) {
        createFetch(`https://next-graphql-api.ft.com/data?query=${slimQuery(query)}`)
            .then(fetchJson)
            .then(handleResponse.bind(undefined, myftClient, flags))
            .catch(noop);
    }
};

export default {
    loadSection
}
