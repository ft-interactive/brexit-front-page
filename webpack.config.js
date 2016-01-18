const path = require('path');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'client'),
	entry: {
		'main.js': './main.js',
		'main.css': './main.scss'
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
					presets: ['react', 'es2015']
				}
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
