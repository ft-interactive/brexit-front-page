const path = require('path');
const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'client'),
	entry: {
		'main.js': './main.js'
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
			}
		]
	},
	plugins: [
		new BowerWebpackPlugin({
			excludes: /\.scss$/
		})
	],
	resolve: {
		root: [
			path.join(__dirname, 'bower_components')
		]
	}
};
