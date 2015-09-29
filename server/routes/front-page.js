import graphql from '../lib/graphql';
import queries from '../config/queries';

import FastFtFeed from '../../components/fastft/fastftfeed';
import Feed from '../../components/feed/feed';

export function getFrontPageData(region, flags) {
	const useElasticSearch = flags.elasticSearchItemGet;
	const mockBackend = flags.mockFrontPage;

	return graphql(useElasticSearch, mockBackend, { flags }).fetch(queries.frontPage(region));
}

// prime both front-page graphql queries to warm up caches

getFrontPageData('UK', {elasticSearchItemGet: true, mockBackend: false });
getFrontPageData('US', {elasticSearchItemGet: true, mockBackend: false });
getFrontPageData('UK', {elasticSearchItemGet: false, mockBackend: false });
getFrontPageData('US', {elasticSearchItemGet: false, mockBackend: false });

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
