const path = require('path');
const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	entry: [
		'./client/main.js'
	],
	output: {
		path: './public',
		filename: 'main.js'
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
			includes: /\.js$/
		})
	],
	resolve: {
		root: [
			path.join(__dirname, 'bower_components')
		]
	}
};
