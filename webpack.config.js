const path = require('path');
const autoprefixer = require('autoprefixer');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
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
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015'],
					plugins: [
						'add-module-exports',
						'transform-runtime',
						['transform-es2015-classes', { loose: true }]
					]
				}
			},
			// force fastclick to load CommonJS
			{
				test: /fastclick\.js$/,
				loader: 'imports?define=>false'
			},
			// don't use requireText plugin (use the 'raw' plugin)
			{
				test: /follow-email\.js$/,
				loader: 'imports?requireText=>require'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					`css?minimize&-autoprefixer&sourceMap!postcss-loader!sass?sourceMap&includePaths[]=${path.resolve(__dirname, './bower_components')}`
				)
			},
			{
				test: /\.html$/,
				loader: 'raw'
			}
		]
	},
	postcss: function () {
		return [autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'ie > 6', 'ff ESR', 'bb >= 7'] })];
	},
	plugins: [
		new BowerWebpackPlugin({
			includes: /\.js$/
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
