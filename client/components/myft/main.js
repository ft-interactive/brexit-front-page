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
        items(limit: 2) {
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

const handleResponse = (flags, response) => {
    const { popularTopics, user: { viewed, followed } } = response;
    // add flag to followed topics
    followed.forEach(concept => concept.isFollowing = true);
    // displayed topics are most viewed by this user followed by general popular topics
    const topics = followed.concat(viewed, popularTopics);
    section.init(document.getElementById('myft'), { main: topics }, flags.getAll());
    myFtUi.updateUi();
};

const noop = () => { };

const loadSection = flags => {
    if (flags.get('frontPageMyftSection') && sessionClient.cookie()) {
        createFetch(`https://next-graphql-api.ft.com/data?query=${slimQuery(query)}`)
            .then(fetchJson)
            .then(handleResponse.bind(undefined, flags))
            .catch(noop);
    }
};

export default {
    loadSection
}
