import { Check, status } from 'n-health';
import logger from '@financial-times/n-logger';

import { start as startPolling, getData, getLastFetchedTime } from '../graphql-poller';

export default class extends Check {

	constructor (options) {
		super(options);
		this.type = options.type;
		this.query = options.query;
		this.verifyKeys = options.verifyKeys || [];
		this.freshnessThreshold = options.freshnessThreshold;
	}

	get checkOutput () {
		switch (this.status) {
			case status.PENDING:
				return 'This check has not yet run';
			case status.PASSED:
				return 'GraphQL query returned data successfully';
			case status.STALE:
				return `GraphQL query has not updated in the last ${this.freshnessThreshold / 60000} minutes`;
			default:
				return 'GraphQL query did not return data successfully';
		}
	}

	start () {
		//Wait until the next tick for next-metrics to instrument
		setImmediate(() => {
			startPolling()
				.then(() => {
					this.tick();
					this.interval = setInterval(this.tick.bind(this), this.interval);
				})
				.catch(logger.error);
		});
	}

	tick () {
		let data = getData(this.query);
		let lastFetched = getLastFetchedTime(this.query);
		this.lastUpdated = new Date();
		if (data && Object.keys(data).length && lastFetched) {
			if (this.freshnessThreshold && Date.now() - lastFetched > this.freshnessThreshold) {
				this.status = status.STALE;
			} else {
				this.status = status.PASSED;
			}
		} else {
			this.status = status.FAILED;
		}
		if (this.status === status.PASSED) {
			this.verifyKeys.forEach(key => {
				if (data && data[key] && (!Array.isArray(data[key]) || data[key].length)) {
					this.status = status.PASSED;
				} else {
					this.status = status.FAILED;
				}
			});
		}
	}
}
