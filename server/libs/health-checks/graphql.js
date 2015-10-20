import ms from 'ms';
import { Check, status } from 'n-health';

import getData from '../get-data';

class GraphQlCheck extends Check {

    constructor(options) {
        super(options);
        this.status = status.PENDING;
        this.pollTime = ms(options.interval);
        this.query = options.query;
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
        this.tick();
        this.interval = setInterval(this.tick.bind(this), this.pollTime);
    }

    stop() {
        clearInterval(this.interval);
    }

    tick() {
        getData(this.query)
            .then(data => {
                this.status = Object.keys(data).length ? status.PASSED : status.FAILED;
                this.lastUpdated = new Date();
            });
    }
}

export default GraphQlCheck;
