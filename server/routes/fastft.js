import graphql from '../lib/graphql';
import queries from '../config/queries';
import express from 'ft-next-express';

const logger = express.logger;

module.exports = function(req, res, next) {
	const useElasticSearch = res.locals.flags.elasticSearchItemGet;
	const mockBackend = res.locals.flags.mockFrontPage;

	res.set({
		'Cache-Control': 'max-age=20, public' // 20 seconds
	});

	graphql(useElasticSearch, mockBackend)
		.fetch(queries.fastFT)
		.then(data => {
			res.json(data.fastFT);
		})
		.catch(err => {
			logger.error('Error fetching fastFt data', err);
			next(err);
		});
};
