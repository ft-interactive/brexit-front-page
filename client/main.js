import {configure, bootstrap} from 'n-ui';
import nVideo from 'n-video';
import highlightDomPath from './components/highlight-dom-path/highlight-dom-path';
import scrollDepth from './components/scroll-depth/scroll-depth';
import marketsData from './components/markets-data/markets-data';
import myft from './components/myft/myft';

configure({preset: 'complete'});

bootstrap(({ flags, mainCss }) => {
	scrollDepth(flags);
	marketsData(flags);
	highlightDomPath();
	myft(flags);

	mainCss.then(() => {
		nVideo.init({
			placeholder: true,
			classes: ['video'],
			selector: '.js-video'
		});
	});
});
