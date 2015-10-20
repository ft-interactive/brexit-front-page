import { fastFT as fastFTQuery } from '../config/queries';
import getData from '../libs/get-data';
import { logger } from 'ft-next-express';

module.exports = function (req, res, next) {
	res.set({
		'Cache-Control': 'max-age=20, public' // 20 seconds
	});

	return getData(fastFTQuery, res.locals.flags)
		.then(data => {
			res.json(data.fastFT);
		})
		.catch(err => {
			logger.error('Error fetching fastFt data', err);
			next(err);
		});
};
