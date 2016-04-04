import getSection from './sections';
import sectionData from '../server/libs/section-data';

const pages = {
	// ordered list of sections for the front page
	'front-page': [
		'top-stories',
		'mid-page-advert-1',
		'opinion',
		'myft',
		'mid-page-advert-2',
		'editors-picks',
		'most-popular',
		'technology',
		'markets',
		'life-and-arts',
		'videos'
	]
};

export default (pageId, data, flags) => {
	const sectionsData = sectionData(data, flags);
	// NOTE: need to copy array, so we don't keep inserting the same things into it (immutable FTW)
	let page = pages[pageId].slice();
	if (pageId === 'front-page' && flags.frontPageNewLayout) {
		page = page
			.map(section => section === 'top-stories' ? 'top-stories-new' : section)
			.filter(section => section !== 'life-and-arts');
	}

	return page.map(sectionId => getSection(sectionId, sectionsData[sectionId], flags));
}
