const path = require('path');
const webpack = require('webpack');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
	new BowerWebpackPlugin({ includes: [/\.js?$/] }),
	// Global definitions
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
		}
	}),
	new ExtractTextPlugin('[name].css'),
	new webpack.NoErrorsPlugin()
];

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'branch') {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}));
	plugins.push(new webpack.optimize.DedupePlugin());
}

const config = {
	entry: {
		main: ['./client/main.js', './client/main.scss']
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.js?$/, loader: 'babel' },
			{ test: /fastclick\.js$/, loader: 'imports?define=>false' }, // force fastclick to load CommonJS
			{
				test: /\.scss|sass?$/,
				loader: ExtractTextPlugin.extract(
					[
						'css?sourceMap',
						'autoprefixer',
						'sass?sourceMap&outputStyle=nested&includePaths[]=' + (path.resolve(__dirname, './bower_components'))
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
	},
	plugins: plugins,
	devtool: 'source-map'
};

module.exports = config;
