import Poller from 'ft-poller';
import queries from '../../config/queries';
import { logger } from 'ft-next-logger';


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
	fastFT: {
		data: null,
		lastUpdated: null,
		isValid: (data) => data && data.fastFT && data.fastFT.items && data.fastFT.items.length
	},
	popularTopics: {
		data: null,
		lastUpdated: null,
		isValid: (data) => data && data.popularTopics && data.popularTopics.length
	},
	mockFrontPage: {
		data: null,
		lastUpdated: null,
		isValid: (data) => data && data.top && data.top.items && data.top.items.length
	},
	mockFrontPageNew: {
		data: null,
		lastUpdated: null,
		isValid: (data) => data && data.top && data.top.items && data.top.items.length
	}
};

let readyPromise;

const pollData = (query, name, flags = {}) => {
	const xFlagsHeader = Object.keys(flags).map(flag => `${flag}:${flags[flag] ? 'on' : 'off'}`).join(',');
	const poller = new Poller({
		url: `https://next-graphql-api.ft.com/?apiKey=${process.env.GRAPHQL_API_KEY}`,
		options: {
			method: 'POST',
			body: JSON.stringify({
				query: query
			}),
			headers: {
				'Content-Type': 'application/json',
				'X-Flags': xFlagsHeader
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

module.exports = {
	start: () => {

		if(!readyPromise) {
			readyPromise = Promise.all([
				pollData(queries.frontPage('UK'), 'frontPageUK').start({ initialRequest: true}),
				pollData(queries.frontPage('US'), 'frontPageUS').start({ initialRequest: true}),
				pollData(queries.fastFT, 'fastFT').start({ initialRequest: true}),
				pollData(queries.popularTopics, 'popularTopics').start({ initialRequest: true}),
				pollData(queries.frontPage('UK'), 'mockFrontPage', { mockFrontPage: true }).start({ initialRequest: true})
			])
			.catch((e) => {
				logger.error(e);
				throw e;
			});
		}
		return readyPromise;
	},
	getData: function (type) {
		return queryResults[type].data;
	},
	getLastFetchedTime: function (type) {
		return queryResults[type].lastUpdated;
	}
};
