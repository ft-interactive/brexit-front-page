var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
	new BowerWebpackPlugin({ includes: [/\.js?$/] }),
	// Global definitions
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
		}
	}),
	new ExtractTextPlugin('main.css'),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
];

var config = {
	devtool: 'source-map',
	debug: true,
	entry: [
		'webpack-hot-middleware/client?path=http://localhost:8888/__webpack_hmr&timeout=20000',
		'./client/main.js',
		'./client/main.scss'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'main.js',
		publicPath: '/front-page/'
	},
	plugins: plugins,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				debug: true,
				query: {
					plugins: ['react-transform'],
					extra: {
						'react-transform': {
							transforms: [{
								transform: 'react-transform-hmr',
								imports: ['react', 'react-dom'],
								locals: ['module']
							},{
								transform: 'react-transform-catch-errors',
								imports: ['react', 'redbox-react']
							}
							]
						}
					}
				}
			},
			{ test: /fastclick\.js$/, loader: 'imports?define=>false' }, // force fastclick to load CommonJS
			{
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract(
					[
						'css',
						'autoprefixer',
						'sass?includePaths[]=' + (path.resolve(__dirname, './bower_components'))
					].join('!')
				)
			}
		]
	},
	resolveLoader: {
		fallback:	path.join(__dirname, 'node_modules')
	},
	resolve: {
		root: [
			path.join(__dirname, 'bower_components')
		]
	}
};

module.exports = config;
