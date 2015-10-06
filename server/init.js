import express from 'ft-next-express';
import React from 'react';
import ReactServer from 'react-dom/server';
import bodyParser from 'body-parser';

// routes
import frontPage, { getFrontPageData } from './routes/front-page';
import fastft from './routes/fastft';
import query from './routes/query';

const app = express({
	helpers: {
		lowercase: (it) => it && it.toLowerCase(),
		trim: (it, {hash: {sentences}}) => {
			return it.split(/\.\s/).slice(0, sentences).join('. ') + '.';
		},
		reactRenderToString: (klass, props) => {
			return ReactServer.renderToString(React.createElement(klass, props.hash));
		}
	}
});
const logger = express.logger;

if(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'branch') {
	const devProxy = require('./dev/proxy');
	 // proxies CSS and JS endpoints to the dev server for hot-loading
	app.use('/front-page/', devProxy(8888))
}

app.use(bodyParser.text());

app.get('/__gtg', (req, res, next) => {
	// warm up the data
	Promise.all([
			getFrontPageData('UK', Object.assign({}, res.locals.flags, { elasticSearchItemGet: true, mockBackend: false })),
			getFrontPageData('US', Object.assign({}, res.locals.flags, { elasticSearchItemGet: true, mockBackend: false })),
			getFrontPageData('UK', Object.assign({}, res.locals.flags, { elasticSearchItemGet: false, mockBackend: false })),
			getFrontPageData('US', Object.assign({}, res.locals.flags, { elasticSearchItemGet: false, mockBackend: false }))
		])
		.then(() => {
			res.status(200).end();
		})
		.catch(next)
});
app.get('/', (req, res) => {
	res.sendStatus(404);
});

// app routes
app.get('/front-page', frontPage('UK'));
app.get('/international', frontPage('US'));
app.get('/uk', frontPage('UK'));

app.get('/home/fastft.json', fastft);
app.post('/front-page/query.json', query);

const port = process.env.PORT || 3001;

export default app;
export let listen = app.listen(port, () => {
	logger.info('Listening on ' + port);
});
