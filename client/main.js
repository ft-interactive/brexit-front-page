import oDate from 'o-date';
import layout from 'n-layout';
import setup from 'next-js-setup';
import nVideo from 'n-video';
import prompts from 'n-message-prompts';
import myFtClient from 'next-myft-client';
import * as myFtUi from 'next-myft-ui';

import highlightDomPath from './components/highlight-dom-path/highlight-dom-path';
import scrollDepth from './components/scroll-depth/scroll-depth';
import marketsData from './components/markets-data/markets-data';
import headerTabs from './components/header-tabs/header-tabs';
import myft from './components/myft/myft';
import mostPopular from './components/most-popular/most-popular';

setup.bootstrap(({flags}) => {
	// NOTE: make sure we init myft client *before* n-layout
	const clientOpts = [];
	flags.get('follow') && clientOpts.push({relationship: 'followed', type: 'concept'});
	flags.get('saveForLater') && clientOpts.push({relationship: 'saved', type: 'content'});
	const myftClient = myFtClient.init(clientOpts);

	layout.init(flags);
	nVideo.init({
		placeholder: true,
		classes: ['video'],
		selector: '.js-video'
	});
	oDate.init();
	prompts.init();
	highlightDomPath();
	scrollDepth(flags);
	myFtUi.init({ anonymous: !(/FTSession=/.test(document.cookie)) });
	marketsData(flags);
	headerTabs(flags);
	myft(myftClient, flags);
	mostPopular(flags);
});
