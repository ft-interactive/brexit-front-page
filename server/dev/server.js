import express from 'express';
import webpack from 'webpack';
import config from '../../webpack.config.hot';
import devMiddlware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

const app = express();
const compiler = webpack(config);

const hotPort = 8888;

const devmw = devMiddlware(compiler, {
	// noInfo: true,
	publicPath: config.output.publicPath
});
const hotmw = hotMiddleware(compiler, {
	log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
});

// We're not serving a CSS bundle in watch mode
app.get('/front-page/main.css', (req, res) => {
	res.sendStatus(404);
})

app.use(devmw);
app.use(hotmw);

app.listen(hotPort, () => {
	console.log('Dev server listening on ' + hotPort);
});
