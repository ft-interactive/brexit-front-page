import { getData } from '../libs/graphql-poller';
import { logger } from 'ft-next-express';

// bail unless we have at least one top story
const contentMissing = (data) => {
	return !data.items || data.items.length < 1;
}

module.exports = function (req, res) {
	const data = getData('fastFT');
	if(contentMissing(data)) {
		logger.error('Could not fetch content for the fastFT feed');
		res.send(500);
	} else {
		res.set({
			'Surrogate-Control': 'max-age=60,stale-while-revalidate=6,stale-if-error=259200' // 60 seconds
		});
		res.json(data);
	}

}
