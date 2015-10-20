/*global console*/

require('isomorphic-fetch');
const notifySaucelabs = require('notify-saucelabs');
const TEST_HOST = `${process.env.TEST_APP}.herokuapp.com`;
const TEST_BASE_URL = `https://${TEST_HOST}`;

module.exports = {
	'js-success test': function (browser) {
		console.log(`Launching ${TEST_BASE_URL}/uk`);
		browser
			.url(`${TEST_BASE_URL}/__gtg`)
			.setCookie({ name: 'next-flags', domain: TEST_HOST, value: 'ads:off', secure: true })
			.url(`${TEST_BASE_URL}/uk`)
			.waitForElementPresent('html.js.js-success', 60000)
			.end();
	},

	tearDown: function (callback) {
		console.log('Sauce Test Results at https://saucelabs.com/tests/' + this.client.sessionId);
		console.log('Updating Saucelabs...');
		notifySaucelabs({
			accessKey: this.client.sessionId,
			passed: this.results.failed === 0
		})
			.then(function () {
				console.info('Finished updating Saucelabs.');
				callback();
			})
			.catch(function (err) {
				console.error('An error has occurred');
				callback(err);
			});
	}
};
