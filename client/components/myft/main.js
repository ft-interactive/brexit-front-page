import { json as fetchJson } from 'fetchres';

import nJsonpFetch from 'n-jsonp-fetch';
import sessionClient from 'next-session-client';
import * as myFtUi from 'next-myft-ui';

import section from '../../../components/section/main';

const query = `
	query User {
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

const loadSection = flags => {
    if (flags.get('frontPageMyftSection') && sessionClient.cookie()) {
        const fetchFn = ('XDomainRequest' in window) ? nJsonpFetch : fetch;
        fetchFn('https://next-graphql-api.ft.com/data?query=' + encodeURIComponent(query.replace(/\s+/g, ' ')), {
            credentials: 'include'
        })
            .then(fetchJson)
            .then(data => {
                section.init(document.getElementById('myft'), { main: data.user.viewed }, flags.getAll());
                myFtUi.updateUi();
            })
            .catch(() => { });
    }
};

export default {
    loadSection
}
