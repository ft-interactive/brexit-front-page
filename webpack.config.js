const path = require('path');
const autoprefixer = require('autoprefixer');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'client'),
	entry: {
		'main.js': ['babel-polyfill', './main.js'],
		'main.css': './main.scss',
		'ie8.css': './ie8.scss'
	},
	output: {
		path: './public',
		filename: '[name]'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015'],
					plugins: [
						'add-module-exports',
						['transform-es2015-classes', { loose: true }]
					]
				}
			},
			// force fastclick to load CommonJS
			{
				test: /fastclick\.js$/,
				loader: 'imports?define=>false'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					`css!postcss-loader!sass?includePaths[]=${path.resolve(__dirname, './bower_components')}`
				)
			}
		]
	},
	postcss: function () {
		return [autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'ie > 6', 'ff ESR', 'bb >= 7'] })];
	},
	plugins: [
		new BowerWebpackPlugin({
			excludes: /\.scss$/
		}),
		new ExtractTextPlugin('[name]', {
			allChunks: true
		})
	],
	resolve: {
		root: [
			path.join(__dirname, 'bower_components')
		]
	}
};
