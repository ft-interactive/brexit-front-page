import { logger } from 'ft-next-logger';
import { mostPopular } from '../config/queries';

const fetchres = require('fetchres');

// bail unless we have at least one top story
const contentMissing = (data) => {
	return !(data && data.popularFromHui) || data.popularFromHui.length < 1;
};


module.exports = function (req, res, next) {
	const facet = req.query.facet;


	fetch(`https://next-graphql-api.ft.com/?apiKey=${process.env.GRAPHQL_API_KEY}`, {
		method: 'POST',
		body: JSON.stringify({
			query: mostPopular(req.params.facet, req.query.uuid)
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(fetchres.json)
	.then((data) => {
		if(contentMissing(data)) {
			logger.error('Could not fetch content for the most popular ' + facet);
			res.status(500).send('Could not fetch content for the most popular ' + facet);
		} else {

			res.set({'Surrogate-Control': 'max-age=120,stale-while-revalidate=6,stale-if-error=259200'});
			res.json(data.popularFromHui);
		}
	})
	.catch(next);

	};
