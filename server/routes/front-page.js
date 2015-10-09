import { frontPage as frontPageQuery } from '../config/queries';
import getData from '../libs/get-data';
import { logger } from 'ft-next-express';

import FastFtFeed from '../../components/fastft/fastftfeed';
import Feed from '../../components/feed/feed';
import Layout from '../../components/layout/layout';
import initialLayout from '../../components/layout/config';

export default (region) => {
	return (req, res, next) => {
		res.set({
			// needs to be private so we can vary for signed in state, ab tests, etc
			'Surrogate-Control': 'max-age=60,stale-while-revalidate=6,stale-if-error=259200'
		});

		getData(frontPageQuery(region), res.locals.flags)
			.then(data => {
				res.render('front-page',
					{
						layout: 'wrapper',
						FastFtFeed,
						Feed,
						Layout,
						content: data,
						initialLayout,
						region
					}
				);
			})
			.catch(err => {
				logger.error(err);
				next(err);
			});
	};
};
