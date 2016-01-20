import { json as fetchJson } from 'fetchres';

import nJsonpFetch from 'n-jsonp-fetch';
import sessionClient from 'next-session-client';
import * as myFtUi from 'next-myft-ui';

import section from '../../../components/section/main';

const query = `
	query MyFT {
        popularTopics(limit: 3) {
            id
            name
            url
            taxonomy
            items(limit: 3) {
                id
                title
                primaryImage {
                    rawSrc
                }
            }
        }
        user {
            viewed(limit: 3) {
                id
                name
                url
                taxonomy
                items(limit: 3) {
                    id
                    title
                    primaryImage {
                        rawSrc
                    }
                }
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
    const { popularTopics, user: { viewed} } = response;
    // displayed topics are most viewed by this user followed by general popular topics
    const topics = viewed.concat(popularTopics);
    section.init(document.getElementById('myft'), { main: topics }, flags.getAll());
    myFtUi.updateUi();
};

const noop = (err) => { console.log(err); throw err; };

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
