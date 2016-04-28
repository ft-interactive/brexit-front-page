import Poller from 'ft-poller';
import logger from '@financial-times/n-logger';

import queries from '../../config/queries';

let queryResults = {
	frontPageUK: {
		data: null,
		lastUpdated: null,
		isValid: (data) => data && data.top && data.top.items && data.top.items.length
	},
	frontPageUS: {
		data: null,
		lastUpdated: null,
		isValid: (data) => data && data.top && data.top.items && data.top.items.length
	},
	mockFrontPage: {
		data: null,
		lastUpdated: null,
		isValid: (data) => data && data.top && data.top.items && data.top.items.length
	}
};

let readyPromise;

const pollData = (query, variables, name, flags = {}) => {
	const poller = new Poller({
		url: `https://next-graphql-api.ft.com/data?apiKey=${process.env.GRAPHQL_API_KEY}`,
		options: {
			method: 'POST',
			body: JSON.stringify({
				query,
				variables
			}),
			headers: {
				'Content-Type': 'application/json',
				'FT-Graphql-Mock-Data': flags.mockFrontPage ? '1' : '0'
			}
		},
		parseData: function (results) {
			if(queryResults[name].isValid(results)) {
				queryResults[name].data= results;
				queryResults[name].lastUpdated = Date.now();
			} else {
				logger.info(`No results when polling for ${name}`);
			}
		},
		refreshInterval: 1000 * 60 * 1
	});

	poller.on('error', logger.error);

	return poller;

};

const start = () => {
	if (!readyPromise) {
		readyPromise = Promise.all([
				pollData(queries.frontPage, { region: 'UK' }, 'frontPageUK').start({ initialRequest: true }),
				pollData(queries.frontPage, { region: 'US' }, 'frontPageUS').start({ initialRequest: true }),
				pollData(queries.frontPage, { region: 'UK' }, 'mockFrontPage', { mockFrontPage: true }).start({ initialRequest: true })
			])
			.catch(e => {
				logger.error(e);
				throw e;
			});
	}
	return readyPromise;
};

const getData = type => queryResults[type].data;

const getLastFetchedTime = type => queryResults[type].lastUpdated;

export { start, getData, getLastFetchedTime };
