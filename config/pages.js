import getSection from './sections';

const pages = {
	// ordered list of sections for the front page
	'front-page': [
		'top-stories',
		'mid-page-advert-1',
		'opinion',
		'mid-page-advert-2',
		'myft',
		'editors-picks',
		'most-popular',
		'technology',
		'markets',
		'life-and-arts',
		'videos'
	]
};

export default (pageId, sectionsContent, flags) => {
	// NOTE: need to copy array, so we don't keep inserting 'top-stories-more' into it
	const page = pages[pageId].slice();
	if (flags.frontPageMoreTopStories && pageId === 'front-page') {
		page.splice(1, 0, 'top-stories-more');
	}

	return page.map(sectionId => getSection(sectionId, sectionsContent[sectionId], flags));
}
