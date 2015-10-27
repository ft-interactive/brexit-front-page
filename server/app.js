require('babel/register')({
	whitelist: [
		'es6.arrowFunctions',
		'es6.destructuring',
		'es6.modules',
		'es6.parameters',
		'es6.spread',

		'react',
		'strict'
	]
});
require('./init.js');
