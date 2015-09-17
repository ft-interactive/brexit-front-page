import graphql from '../lib/graphql';
import queries from '../config/queries';

import {FastFtFeed} from '../../components/fastft/main';
import {Feed} from '../../components/feed/main';

export default (region) => {
	return (req, res, next) => {
		const useElasticSearch = res.locals.flags.elasticSearchItemGet;
		const mockBackend = res.locals.flags.mockFrontPage;

		res.set({
			// needs to be private so we can vary for signed in state, ab tests, etc
			'Surrogate-Control': 'max-age=60,stale-while-revalidate=1,stale-if-error=259200'
		});

		graphql(useElasticSearch, mockBackend, { flags: res.locals.flags }).fetch(queries.frontPage(region))
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
