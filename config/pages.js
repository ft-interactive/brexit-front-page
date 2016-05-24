import getSection from './sections';
import sectionData from '../server/libs/section-data';

const getPages = flags => {

	return {
		'front-page': [
			'brexit-coverage',
			'headlines',
			'top-stories',
			'mid-page-advert-1',
			'opinion',
			'myft',
			'mid-page-advert-2',
			'editors-picks',
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
