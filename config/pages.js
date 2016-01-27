import getSection from './sections';

const pages = {
	// ordered list of sections for the front page
	'front-page': [
		'top-stories',
		'opinion',
		'myft',
		'editors-picks',
		'most-popular',
		'technology',
		'markets',
		'life-and-arts',
		'videos'
	]
};

export default (pageId, sectionsContent, flags) =>
	pages[pageId].map(sectionId => getSection(sectionId, sectionsContent[sectionId], flags));
