import highlightDomPath from './components/highlight-dom-path/main';
import scrollDepth from './components/scroll-depth/main';
import marketsData from './components/markets-data/main';

import myFtClient from 'next-myft-client';
import * as myFtUi from 'next-myft-ui';

import oDate from 'o-date';

import layout from 'n-layout';
import setup from 'next-js-setup';
import nVideo from 'n-video';
import prompts from 'n-message-prompts';

import headerTabs from './components/header-tabs/main';
import fastFT from '../components/fastft/main';
import Layout from '../components/layout/main';
import LayoutOverlay from '../components/layout-overlay/main';
import './main.scss';

setup.bootstrap(({flags}) => {

	const clientOpts = [];
	flags.get('follow') && clientOpts.push({relationship: 'followed', type: 'concept'});
	flags.get('saveForLater') && clientOpts.push({relationship: 'saved', type: 'content'});
	myFtClient.init(clientOpts);

	myFtUi.init({anonymous: !(/FTSession=/.test(document.cookie))});

	layout.init(flags);

	const feedContainer = document.getElementById('fastft');
	fastFT.init(feedContainer);

	headerTabs.init();

	nVideo.init({
		placeholder: true,
		classes: ['video'],
		selector: '.js-video'
	});

	oDate.init();
	prompts.init();
	highlightDomPath();
	scrollDepth.init(flags);
	marketsData.init(flags);

	const layoutContainer = document.getElementById('main-body');
	if (layoutContainer) {
		const mainContent = layoutContainer.getAttribute('data-main-content');
		if (mainContent) {
			Layout.init(layoutContainer, JSON.parse(mainContent));

			const layoutOverlayContainer = document.getElementById('layout-overlay-container');
			LayoutOverlay.init(layoutOverlayContainer, (newLayout) => {
				Layout.render(newLayout);
				LayoutOverlay.render(newLayout);
			});
		}
	}
});
