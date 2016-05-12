import Poller from 'ft-poller';
import logger from '@financial-times/n-logger';

const poller = new Poller({
	// TODO point this to the real data source (a microservice we are yet to write)
	url: 'http://bertha.ig.ft.com/view/publish/gss/1G2InOC7Y5dQM4C2V1Kb_AWOIPlcnQJx7rw8OmQ7IcVc/data',
});

poller.on('error', logger.error);

// function to start polling (server/init.js calls this once at startup)
let readyPromise;
export const startBrexitPolling = () => {
	if (!readyPromise) {
		readyPromise = poller.start({ initialRequest: true });
	}

	return readyPromise;
};

// function that returns template data for rendering the BrexitCoverage component
// (based on data from the poller)
export const getBrexitCoverageData = () => {
	const pollerData = poller.getData();
	if (!pollerData) return null;

	const { remain, leave } = pollerData[0]; // for now (bertha row 0)

	return {
		remainPercentage: String(remain * 100),
		leavePercentage: String(leave * 100),
	};
};

// TODO export another function, for getting the data for the other component: getBrexitBuildUpData
