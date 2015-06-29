'use strict';
import {uk as contentConfig} from '../config/content'



module.exports = function(req, res) {
	const useElasticSearch = res.locals.flags.elasticSearchItemGet.isSwitchedOn;
	const contentData = content.uk(useElasticSearch);

	res.render('uk', {
		layout: 'wrapper',
		Feed: Feed,
		articles: contentData.top,
		fastFt: contentData.fastFt
	});
};
