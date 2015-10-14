import queries from '../config/queries';
import getData from '../libs/get-data';
import { logger } from 'ft-next-express';

import FastFtFeed from '../../components/fastft/fastftfeed';
import Feed from '../../components/feed/feed';
import Layout from '../../components/layout/layout';
import initialLayout from '../../components/layout/config';

export default (region) => {
	return (req, res, next) => {
		const query = (res.locals.flags.frontPageLayoutPrototype ? queries.newFrontPage(region) : queries.frontPage(region));

		res.set({
			// needs to be private so we can vary for signed in state, ab tests, etc
			'Surrogate-Control': 'max-age=60,stale-while-revalidate=6,stale-if-error=259200'
		});

		getData(query, res.locals.flags)
			.then(data => {
				const renderParams = {
					layout: 'wrapper',
					FastFtFeed,
					Feed,
					Layout,
					content: data,
					initialLayout,
					region
				};
				if (res.locals.flags.frontPageHeaderMarketsData) {
					renderParams.header = {
						before: `
							<div class="markets-data-wrapper">
								<div class="o-grid-container">
									<div class="o-grid-row">
										<div class="markets-data js-markets-data" data-o-grid-colspan="12" data-trackable="header | markets data"></div>
									</div>
								</div>
							</div>
						`
					};
				}

				res.render('front-page',renderParams);
			})
			.catch(err => {
				logger.error(err);
				next(err);
			});
	};
};
