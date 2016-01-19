// modules that need to be compiled by babel
const es6Modules = ['next-myft-ui', 'n-image'];

require('babel/register')({
	whitelist: [
		'es6.arrowFunctions',
		'es6.destructuring',
		'es6.modules',
		'es6.parameters',
		'es6.spread',

		'react',
		'strict'
	],
	ignore: filename =>
		filename.includes('/node_modules/') && !es6Modules.some(module => filename.includes(`/node_modules/${module}`))
});
module.exports = require('./init');
