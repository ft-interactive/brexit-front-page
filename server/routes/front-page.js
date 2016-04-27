import { getData } from '../libs/graphql-poller';
import getPage from '../../config/pages';

import FastFt from '../../shared/components/fast-ft/fast-ft';
import components from '@financial-times/n-section';

// bail unless we have at least one top story
const contentMissing = data =>
	!(data && data.top && data.topStory) || data.top.items.length < 1|| data.topStory.items.length < 1 ;

const getAdsLayout = (requestedLayout, flags) => {
	// map some url params to existing ad layout names
	if (flags.adsNewProposition && !requestedLayout) {
		requestedLayout = 'new-proposition';
	}

	return requestedLayout || 'default';
};

export default region => (req, res) => {
	components.FastFt = FastFt;

	const frontPageData = res.locals.flags.mockFrontPage ? 'mockFrontPage' : `frontPage${region}`;

	const data = {
		frontPage: getData(frontPageData),
		adsLayout: getAdsLayout(req.query.adsLayout, res.locals.flags)
	};

	res.set({
		// needs to be private so we can vary for signed in state, ab tests, etc
		'Surrogate-Control': 'max-age=60,stale-while-revalidate=6,stale-if-error=259200'
	});

	if (contentMissing(data.frontPage)) {
		throw new Error('Could not fetch content for the front page');
	}

	const sections = getPage('front-page', data, res.locals.flags);

	const renderParams = {
		layout: 'wrapper',
		Section: components.Section,
		sections,
		region,
		preconnect: [
			'https://next-markets-proxy.ft.com'
		],
		adsLayout: data.adsLayout,
		hasIe8Stylesheet: true
	};

	if (res.locals.flags.frontPageHeaderMarketsData) {
		const marketsDataParams = {
			header: {
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
			},
			footer: {
				inside: '<p class="markets-data-disclaimer">Markets data delayed by at least 15 minutes</p>'
			}
		};
		Object.assign(renderParams, marketsDataParams);
	}

	res.render('front-page', renderParams);
}
