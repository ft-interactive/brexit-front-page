import getSection from './sections';
import sectionData from '../server/libs/section-data';

const getPages = flags => {

	let pages = {
		'front-page': [
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
	};

	if (flags.brexitCoverageComponent) {
		pages['front-page'].splice(0, 0, 'brexit-coverage');
	}
	if (flags.brexitBuildupComponent) {
		pages['front-page'].splice(pages['front-page'].indexOf('opinion'), 0, 'brexit-buildup');
	}

	return pages;
};



export default (pageId, data, flags) => {
	const sectionsData = sectionData(data, flags);
	const pages = getPages(flags);
	return pages[pageId].map(sectionId => getSection(sectionId, sectionsData[sectionId], flags));
}
