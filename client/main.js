import headerTabs from './components/header-tabs/main';
import highlightDomPath from './components/highlight-dom-path/main';
import scrollDepth from './components/scroll-depth/main';

import layout from 'n-layout';
import setup from 'next-js-setup';
import oDate from 'o-date';
import nVideo from 'n-video';
import prompts from 'n-message-prompts';

import fastFT from '../components/fastft/main';

import './main.scss';

import Section from '../components/section/main';

setup.bootstrap(({flags}) => {
	layout.init(flags);

	const feedContainer = document.getElementById('fastft');
	fastFT.init(feedContainer);

	const tabs = document.getElementById('header-tabs');
	headerTabs.init(tabs, '#news-tab');

	nVideo.init({
		optimumWidth: 710,
		placeholder: true,
		classes: ['video'],
		selector: '.js-video'
	});

	oDate.init();
	prompts.init();
	highlightDomPath();
	scrollDepth.init(flags);

	const topStories = document.getElementById('top-stories');
	Section.init(topStories);
});
