import { getData } from '../libs/graphql-poller';

import FastFtFeed from '../../components/fastft/fastftfeed';
import Feed from '../../components/feed/feed';
import Layout from '../../components/layout/layout';
import initialLayout from '../../components/layout/config';

// bail unless we have at least one top story
const contentMissing = (data) => {
	return !(data && data.top) || data.top.items.length < 1;
}

export default (region) => {
	return (req, res) => {

		const frontPageData = (res.locals.flags.frontPageLayoutPrototype ? `newFrontPage${region}` : `frontPage${region}`);
		const dataName = res.locals.flags.mockFrontPage ? 'mockFrontPage' : frontPageData;

		const data = getData(dataName);

		res.set({
			// needs to be private so we can vary for signed in state, ab tests, etc
			'Surrogate-Control': 'max-age=60,stale-while-revalidate=6,stale-if-error=259200'
		});

		if(contentMissing(data))
			throw 'Could not fetch content for the front page';

		const headerParams = {
			before: `
				<div class="markets-data-wrapper">
					<div class="o-grid-container">
						<div class="o-grid-row">
							<div class="markets-data js-markets-data" data-o-grid-colspan="12" data-trackable="header | markets data">
								<a href="http://markets.ft.com/data" class="markets-data__link" data-trackable="link">Visit Markets Data</a>
							</div>
						</div>
					</div>
				</div>
			`
		};
		const footerParams = {
			inside: '<p class="markets-data-disclaimer">Markets data delayed by at least 15 minutes</p>'
		};
		const renderParams = {
			layout: 'wrapper',
			FastFtFeed,
			Feed,
			Layout,
			content: data,
			initialLayout,
			region,
			preconnect: [
				'https://next-markets-proxy.ft.com'
			]
		};
		if (res.locals.flags.frontPageHeaderMarketsData) {
			renderParams.header = headerParams;
			renderParams.footer = footerParams;
		}

		res.render('front-page',renderParams);
	};

};
