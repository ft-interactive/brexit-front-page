import { Check, status } from 'n-health';

import getData from '../get-data';

class GraphQlCheck extends Check {

    constructor(options) {
        super(options);
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

    tick() {
        return getData(this.query)
            .then(data => {
                this.status = Object.keys(data).length ? status.PASSED : status.FAILED;
            });
    }
}

export default GraphQlCheck;
