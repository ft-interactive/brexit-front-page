import ms from 'ms';
import { Check, status } from 'n-health';

import getData from '../get-data';

class GraphQlCheck extends Check {

    constructor(options) {
        super(options);
        this.checkOutput = 'This test has not yet run';
        this.pollTime = ms(options.interval);
        this.query = options.query;
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
                if (Object.keys(data).length) {
                    this.status = status.PASSED;
                    this.checkOutput = 'GraphQL query returned data successfully';
                } else {
                    this.status = status.FAILED;
                    this.checkOutput = 'GraphQL query did not return data successfully';
                }
                this.lastUpdated = new Date();
            });
    }
}

export default GraphQlCheck;
