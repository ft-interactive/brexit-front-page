const path = require('path');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'client'),
	entry: {
		'main.js': './main.js',
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
				query: {
					presets: ['react', 'es2015'],
					plugins: ['add-module-exports']
				}
			},
			// force fastclick to load CommonJS
			{
				test: /fastclick\.js$/,
				loader: 'imports?define=>false'
			},
			{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!autoprefixer!sass?includePaths[]=' + (path.resolve(__dirname, './bower_components')))
            }
		]
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
