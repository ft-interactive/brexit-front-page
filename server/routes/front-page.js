import { getData } from '../libs/graphql-poller';
import sectionContent from '../libs/section-content';

import Section from '../../shared/components/section/section';
import getPage from '../../config/pages';

// bail unless we have at least one top story
const contentMissing = (data) => {
	return !(data && data.top && data.topStory) || data.top.items.length < 1|| data.topStory.items.length < 1 ;
};

export default (region) => (req, res) => {
	const frontPageData = res.locals.flags.mockFrontPage ? 'mockFrontPage' : `frontPage${region}`;

	const data = {
		frontPage: getData(frontPageData),
		popularTopics: getData('popularTopics')
	};

	res.set({
		// needs to be private so we can vary for signed in state, ab tests, etc
		'Surrogate-Control': 'max-age=60,stale-while-revalidate=6,stale-if-error=259200'
	});

	if (contentMissing(data.frontPage)) {
		throw new Error('Could not fetch content for the front page');
	}

	const sections = getPage('front-page', sectionContent(data, res.locals.flags), res.locals.flags);

	const renderParams = {
		layout: 'wrapper',
		Section,
		sections,
		region,
		preconnect: [
			'https://next-markets-proxy.ft.com'
		],
		adsLayout: req.query.adsLayout || 'default'
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
};
