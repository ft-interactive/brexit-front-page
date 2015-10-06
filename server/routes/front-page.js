import graphql from '../lib/graphql';
import queries from '../config/queries';

import FastFtFeed from '../../components/fastft/fastftfeed';
import Feed from '../../components/feed/feed';
import SectionTopStories from '../../components/sections/top-stories';
import SectionOpinion from '../../components/sections/opinion';
import SectionEditorsPicks from '../../components/sections/editors-picks';

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
				FastFtFeed,
				Feed,
				SectionTopStories,
				SectionOpinion,
				SectionEditorsPicks,
				content: contentData,
				region
			});
		})
		.catch(next);
	};
};
