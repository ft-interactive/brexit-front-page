import setup from 'n-ui';
import nVideo from 'n-video';
import {client as myFtClient} from 'n-ui/myft';

import highlightDomPath from './components/highlight-dom-path/highlight-dom-path';
import scrollDepth from './components/scroll-depth/scroll-depth';
import marketsData from './components/markets-data/markets-data';
import headerTabs from './components/header-tabs/header-tabs';
import myft from './components/myft/myft';

setup.bootstrap(({ flags }) => {
	nVideo.init({
		placeholder: true,
		classes: ['video'],
		selector: '.js-video'
	});
	highlightDomPath();
	scrollDepth(flags);
	marketsData(flags);
	headerTabs(flags);
	myft(myftClient, flags);
});
