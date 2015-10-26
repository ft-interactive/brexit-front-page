import Poller from 'ft-poller';
import queries from '../config/queries';
import { logger } from 'ft-next-express';

let data = {
	frontPageUK: null,
	frontPageUS: null,
	newFrontPageUK: null,
	newFrontPageUS: null,
	fastFT: null
}

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
			if(results && Object.keys(results).length) {
				data[name] = results;
			} else {
				logger.info('No results when polling for ', name);
			}
		},
		refreshInterval: 1000 * 60
	});

	// poller.on('error', (err) => {
	// 	logger.error(err);
	// });

	return poller;

};

module.exports = {
	start: () => {

		if(!readyPromise) {
			readyPromise = Promise.all([
				pollData(queries.frontPage('UK'), 'frontPageUK').start({ initialRequest: true}),
				pollData(queries.frontPage('US'), 'frontPageUS').start({ initialRequest: true}),
				pollData(queries.newFrontPage('UK'), 'newFrontPageUK').start({ initialRequest: true}),
				pollData(queries.newFrontPage('US'), 'newFrontPageUS').start({ initialRequest: true}),
				pollData(queries.fastFT, 'fastFT').start({ initialRequest: true})
			])
			.catch(logger.error);
		}
		return readyPromise;
	},
	getData: function (type) {
		return data[type];
	}
};
