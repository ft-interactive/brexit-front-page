import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.hot';
import devmw from 'webpack-dev-middleware';
import hotmw from 'webpack-hot-middleware';

const compiler = webpack(config);

function extend(app) {
	const hotServer = express();
	const hotPort = 8888;

	app.use(devmw(compiler, {
		//noInfo: true,
		publicPath: config.output.publicPath
	}));

	hotServer.use(hotmw(compiler, {
		log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
	}));

	hotServer.listen(hotPort, () => {
		console.log('Hot loading notifier listening on ' + hotPort);
	});
}

export default {
	extend: extend
}
