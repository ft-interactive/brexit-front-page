import React from 'react';
import ReactServer from 'react-dom/server';
import bodyParser from 'body-parser';
import path from 'path';

import express from 'ft-next-express';
import nHealth from 'n-health';

import additionalHealthChecks from './libs/health-checks/index';
import { start as startPolling } from './libs/graphql-poller';
import videoData from './libs/video-data';
import colspan from '../client/utils/colspan';

// routes
import frontPage from './routes/front-page';
import fastft from './routes/fastft';

const srcsets = {
	lead: { default: 470, s: 720, m: 630, l: 590, xl: 700 },
	editors: { default: 240, s: 350, m: 350, l: 240, xl: 240 },
	top: { default: 370, s: 240, m: 320, l: 250, xl: 350 },
	opinion: { default: 320, s: 200, m: 200, l: 200, xl: 200 },
	normal: { default: 470, s: 150, m: 200, l: 200, xl: 250 }
};
const healthChecks = nHealth(path.resolve(__dirname, './config/health-checks'), additionalHealthChecks);
const app = express({
	helpers: {
		lowercase: (it) => it && it.toLowerCase(),
		trim: (it, {hash: {sentences}}) => {
			return it.split(/\.\s/).slice(0, sentences).join('. ') + '.';
		},
		reactRenderToString: (klass, props) => {
			const propsToRender = props.hash;
			if(props.hash.spread) {
				Object.keys(props.hash.spread).forEach(key => {
					propsToRender[key] = props.hash.spread[key];
				});
			}
			if(props.data.root.flags.mostPopularByIndustry && propsToRender.dynamicContent) {
				return ReactServer.renderToString(React.createElement(klass, propsToRender));
			} else {
				return ReactServer.renderToStaticMarkup(React.createElement(klass, propsToRender));
			}

		},
		colspan,
		responsiveImage: options => {
			const opts = {
				image: {
					url: options.hash.img.rawSrc,
					class: options.hash.class,
					srcset: (srcsets[options.hash.sizing] || srcsets['normal'])
				}
			};
			return options.fn(Object.assign({}, this, opts));
		},
		videoData: (video, size) => {
			return videoData(video, size);
		}
	},
	healthChecks: healthChecks.asArray()
});

if (process.env.HOT_LOAD) {
	const devProxy = require('./dev/proxy');
	// proxies CSS and JS endpoints to the dev server for hot-loading
	app.use('/front-page/', devProxy(8888))
}

app.use(bodyParser.text());

startPolling();

app.get('/__gtg', (req, res) => {
	res.status(200).end();
});
app.get('/', (req, res) => {
	res.sendStatus(404);
});

// app routes
app.get('/front-page', frontPage('UK'));
app.get('/international', frontPage('US'));
app.get('/uk', frontPage('UK'));

app.get(/\/(__)?home\/fastft\.json/, fastft);

const port = process.env.PORT || 3001;
const listen = app.listen(port, () => { });

export default {
	app,
	listen
};
