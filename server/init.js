import React from 'react';
import ReactServer from 'react-dom/server';
import bodyParser from 'body-parser';
import path from 'path';

import express from '@financial-times/n-express';
import nHealth from 'n-health';

import * as additionalHealthChecks from './libs/health-checks/index';
import { start as startPolling } from './libs/graphql-poller';
import colspan from '../client/utils/colspan';

// routes
import frontPage from './routes/front-page';

const healthChecks = nHealth(path.resolve(__dirname, './config/health-checks'), additionalHealthChecks);
const app = express({
	withFlags: true,
	withHandlebars: true,
	withNavigation: true,
	withAnonMiddleware: true,
	withBackendAuthentication: true,
	helpers: {
		reactRenderToString: (klass, props) => {
			const propsToRender = props.hash;
			const flags = props.data.root.flags;
			if (props.hash.spread) {
				Object.keys(props.hash.spread).forEach(key => {
					propsToRender[key] = props.hash.spread[key];
				});
			}
			propsToRender.flags = flags;
			return ReactServer.renderToStaticMarkup(React.createElement(klass, propsToRender));
		},
		colspan
	},
	healthChecks: healthChecks.asArray()
});

app.use(bodyParser.text());

startPolling();

app.get('/__gtg', (req, res) => {
	res.status(200).end();
});

// Editions
const usEdition = frontPage('US');
const ukEdition = frontPage('UK');

// Routes
app.get('/', (req, res, next) => {
	if (res.locals.flags.frontPageNoPath) {
		if (req.get('FT-Edition') === 'uk') {
			return ukEdition(req, res, next);
		}
		return usEdition(req, res, next);
	}
	return res.redirect('/home' + (req.query.edition ? '?edition=' + req.query.edition : ''));
});
app.get('/home', (req, res, next) => {
	if (res.locals.flags.frontPageNoPath) {
		return res.redirect('/' + (req.query.edition ? '?edition=' + req.query.edition : ''));
	}
	if (req.get('FT-Edition') === 'uk') {
		return ukEdition(req, res, next);
	}
	return usEdition(req, res, next);
});

const listen = app.listen(process.env.PORT || 3001);

export default app
export { listen }
