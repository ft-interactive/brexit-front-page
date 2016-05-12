import getSection from './sections';
import sectionData from '../server/libs/section-data';

const pages = {
	// ordered list of sections for the front page
	'front-page': [
		'brexit-coverage',
		'top-stories',
		'mid-page-advert-1',
		'opinion',
		'editors-picks',
		'myft',
		'mid-page-advert-2',
		'most-popular',
		'technology',
		'markets',
		'videos'
	]
};

export default (pageId, data, flags) => {
	const sectionsData = sectionData(data, flags);
	return pages[pageId].map(sectionId => getSection(sectionId, sectionsData[sectionId], flags));
}
