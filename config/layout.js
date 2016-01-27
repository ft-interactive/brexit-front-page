import {format as dateFormat} from 'o-date';
import FastFt from '../components/fast-ft/fast-ft';

const date = dateFormat(new Date(), 'EEEE MMMM yyyy');

//TODO - give these more semantic names e.g. four-card-row or dense-grid
import topStoriesLayout from './layouts/top-stories';
import topStoriesWithRelatedLayout from './layouts/top-stories-with-related';
import mostPopularLayout from './layouts/most-popular';
import mostPopularAdsLayout from './layouts/most-popular-ads';
import opinionLayout from './layouts/opinion';
import editorsPicksLayout from './layouts/editors-picks';
import editorsPicksAdsLayout from './layouts/editors-picks-ads';
import featuredSectionLayout from './layouts/featured-section';
import videoLayout from './layouts/video';
import myftLayout from './layouts/myft';

import Ad from '../components/card/ad';

import { mostPopular } from './queries';

export default (sectionContents, flags = {}) => {
	return [
		{
			id: 'top-stories',
			title: 'Top Stories',
			style: 'top-stories',
			date: date,
			isTab: true,
			getLayout: () => topStoriesLayout,
			size: {
				default: 12
			},
			sidebarComponent: {
				id: 'fastft',
				component: FastFt,
				isTab: true
			},
			cols: {
				content: {
					default: 12,
					L: 8,
					XL: 9
				},
				sidebar: {
					default: 12,
					L: 4,
					XL: 3
				}
			}
		}
	]
		// add the content to each section
		.map(section => Object.assign({}, section, { content: sectionContents[section.id] }));
};
