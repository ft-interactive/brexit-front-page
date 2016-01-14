import oDate from 'o-date';

import layout from 'n-layout';
import setup from 'next-js-setup';
import nVideo from 'n-video';
import prompts from 'n-message-prompts';
import myFtClient from 'next-myft-client';
import * as myFtUi from 'next-myft-ui';

import highlightDomPath from './components/highlight-dom-path/main';
import scrollDepth from './components/scroll-depth/main';
import marketsData from './components/markets-data/main';
import headerTabs from './components/header-tabs/main';
import layoutTool from './components/layout-tool/main';
import section from '../components/section/main';

import fastFT from '../components/fastft/main';

setup.bootstrap(({flags}) => {
	layout.init(flags);

	const feedContainer = document.getElementById('fastft');
	fastFT.init(feedContainer);

	nVideo.init({
		placeholder: true,
		classes: ['video'],
		selector: '.js-video'
	});

	oDate.init();
	prompts.init();
	highlightDomPath();
	scrollDepth.init(flags);
	layoutTool.init(flags);

	if(flags.get("mostPopularByIndustry")) {
		const mostPopularContainer = document.getElementById('most-popular');
		const mostPopularContent = JSON.parse(mostPopularContainer.getAttribute('data-section-content'));
		section.init(mostPopularContainer, mostPopularContent, { mostPopularByIndustry: true });
	}
	if (flags.get('frontPageMyftSection')) {
		const myftContainer = document.getElementById('myft');
		section.init(myftContainer, { main: [] });
	}

	// NOTE - these are last as they depend on polyfills from the polyfill service
	// (which fails in e.g. BB10 - https://github.com/3rd-Eden/useragent/issues/83)
	const clientOpts = [];
	flags.get('follow') && clientOpts.push({relationship: 'followed', type: 'concept'});
	flags.get('saveForLater') && clientOpts.push({relationship: 'saved', type: 'content'});
	myFtClient.init(clientOpts);
	myFtUi.init({anonymous: !(/FTSession=/.test(document.cookie))});

	marketsData.init(flags);
	headerTabs.init();
});
