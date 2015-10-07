import getData from '../libs/get-data';
import { logger } from 'ft-next-express';

module.exports = function(req, res) {
	const query = req.body;

	getData(query)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			logger.error('Error getting query', err);
			res.status(400);
			res.json(err);
		});
};
