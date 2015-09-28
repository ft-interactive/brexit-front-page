import express from 'ft-next-express';
import React from 'react';
import ReactServer from 'react-dom/server';
import bodyParser from 'body-parser';

// routes
import frontPage, { getFrontPageData } from './routes/front-page';
import fastft from './routes/fastft';
import query from './routes/query';

var app = express({
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

// install dev middleware for easy development
if(process.env.NODE_ENV !== 'production') {
	const dev = require('./dev');
	dev.extend(app);
}

app.use(bodyParser.text());

app.get('/__gtg', (req, res) => {
	// wait for data to be available
	getFrontPageData('UK', res.locals.flags)
		.then(() => {
			res.status(200).end();
		});
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

var port = process.env.PORT || 3001;

export default app;
export let listen = app.listen(port, () => {
	logger.info('Listening on ' + port);
});
