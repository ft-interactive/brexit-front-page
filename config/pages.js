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
	// NOTE: need to copy array, so we don't keep inserting 'top-stories-more' into it
	let page = pages[pageId].slice();
	if (pageId === 'front-page') {
		if (flags.frontPageMoreTopStories) {
			if (flags.frontPageNewLayout) {
				page.splice(1, 0, 'top-stories-more-new');
			} else {
				page.splice(1, 0, 'top-stories-more');
			}
		}
		if (flags.frontPageNewLayout) {
			page = page.map(section => section === 'top-stories' ? 'top-stories-new' : section);
		}
	}

	return page.map(sectionId => getSection(sectionId, sectionsData[sectionId], flags));
}
