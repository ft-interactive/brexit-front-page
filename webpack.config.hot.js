import path from 'path';
import webpack from 'webpack';
import BowerWebpackPlugin from 'bower-webpack-plugin';

const plugins = [
	new BowerWebpackPlugin({ includes: [/\.js?$/] }),
	// Global definitions
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
		}
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
];

const config = {
	devtool: 'source-map',
	debug: true,
	entry: [
		'webpack-hot-middleware/client?path=http://localhost:8888/__webpack_hmr&timeout=20000',
		'./client/main.js'
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
				loader: 'style!css!autoprefixer!sass?includePaths[]=' + (path.resolve(__dirname, './bower_components'))
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

export default config;
