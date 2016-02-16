import React from 'react';
import ReactServer from 'react-dom/server';
import bodyParser from 'body-parser';
import path from 'path';

import express from 'ft-next-express';
import nHealth from 'n-health';

import additionalHealthChecks from './libs/health-checks/index';
import { start as startPolling } from './libs/graphql-poller';
import colspan from '../client/utils/colspan';

// routes
import frontPage from './routes/front-page';
import fastft from './routes/fastft';

const healthChecks = nHealth(path.resolve(__dirname, './config/health-checks'), additionalHealthChecks);
const app = express({
	helpers: {
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
	},
	healthChecks: healthChecks.asArray()
});

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

const listen = app.listen(process.env.PORT || 3001);

export default {
	app,
	listen
};
