import graphql from '../lib/graphql';
import queries from '../config/queries';

import {FastFtFeed} from '../../components/fastft/main';
import {Feed} from '../../components/feed/main';

export function getFrontPageData(region, flags) {
	const useElasticSearch = flags.elasticSearchItemGet;
	const mockBackend = flags.mockFrontPage;

	return graphql(useElasticSearch, mockBackend, { flags }).fetch(queries.frontPage(region));
}

export default (region) => {
	return (req, res, next) => {
		res.set({
			// needs to be private so we can vary for signed in state, ab tests, etc
			'Surrogate-Control': 'max-age=60,stale-while-revalidate=6,stale-if-error=259200'
		});

		getFrontPageData(region, res.locals.flags)
		.then(contentData => {
			res.render('front-page', {
				layout: 'wrapper',
				FastFtFeed: FastFtFeed,
				Feed: Feed,
				content: contentData,
				region: region
			});
		})
		.catch(next);
	};
};
