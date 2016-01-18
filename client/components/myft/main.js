import nJsonpFetch from 'n-jsonp-fetch';
import { json as fetchJson } from 'fetchres';
import sessionClient from 'next-session-client';

import section from '../../../components/section/main';

const query = `
	query User {
        user {
            viewed(limit: 3) {
                id
                name
                url
                items(limit: 2) {
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

const loadSection = flags => {
    if (flags.get('frontPageMyftSection') && sessionClient.cookie()) {
        const fetchFn = ('XDomainRequest' in window) ? nJsonpFetch : fetch;
        fetchFn('https://next-graphql-api.ft.com/data?query=' + encodeURIComponent(query.replace(/\s+/g, ' ')), {
            credentials: 'include'
        })
            .then(fetchJson)
            .then(data => {
                section.init(document.getElementById('myft'), { main: data.user.viewed }, flags.getAll());
            })
            .catch(() => { });
    }
};

export default {
    loadSection
}
