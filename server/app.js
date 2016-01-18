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
	ignore: function(filename) {
		if (filename.includes('/node_modules/') && !filename.includes('/node_modules/n-image')) {
			return true;
		} else {
			return false;
		}
	}
});
module.exports = require('./init');
