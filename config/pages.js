import getSection from './sections';

const pages = {
	// ordered list of sections for the front page
	'front-page': [
		'top-stories',
		'mid-page-advert-1',
		'opinion',
		'myft',
		'editors-picks',
		'mid-page-advert-2',
		'most-popular',
		'technology',
		'markets',
		'life-and-arts',
		'videos'
	]
};

export default (pageId, sectionsContent, flags) =>
	pages[pageId].map(sectionId => getSection(sectionId, sectionsContent[sectionId], flags));
