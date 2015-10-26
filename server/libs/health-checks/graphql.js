import ms from 'ms';
import { Check, status } from 'n-health';

import { start as startPolling ,getData } from '../graphql-poller';

class GraphQlCheck extends Check {

    constructor(options) {
        super(options);
        this.status = status.PENDING;
        this.pollTime = ms(options.interval);
        this.type = options.type;
        this.query = options.query;
        this.verifyKeys = options.verifyKeys || [];
    }

    get checkOutput() {
        switch (this.status) {
            case status.PENDING:
                return 'This check has not yet run';
            case status.PASSED:
                return 'GraphQL query returned data successfully';
            default:
                return 'GraphQL query did not return data successfully';
        }
    }

    start() {
        startPolling().then(() => {
            this.tick();
            this.interval = setInterval(this.tick.bind(this), this.pollTime);
        });
    }

    stop() {
        clearInterval(this.interval);
    }

    tick() {
        let data = getData(this.query);
        this.status = data && Object.keys(data).length ? status.PASSED : status.FAILED;
        this.verifyKeys.forEach((key) => {
            if(data && data[key]) {
                this.status = status.PASSED;
            } else {
                this.status = status.FAILED;
                return;
            }
        });
        this.lastUpdated = new Date();
    }
}

export default GraphQlCheck;
