import getSection from './sections';
import sectionData from '../server/libs/section-data';

const getPages = flags => {

	return {
		'front-page': [
			'headlines',
			'top-stories',
			'opinion',
			'mid-page-advert-1',
			'myft',
			'editors-picks',
			'mid-page-advert-2',
			'most-popular',
			'technology',
			'markets',
			'videos'
		]
	}
};



export default (pageId, data, flags) => {
	const sectionsData = sectionData(data, flags);
	const pages = getPages(flags);
	return pages[pageId].map(sectionId => getSection(sectionId, sectionsData[sectionId], flags));
}
