import editorsPicksSection from './editors-picks';
import lifeAndArtsSection from './life-and-arts';
import marketsSection from './markets';
import mostPopularSection from './most-popular';
import myftSection from './myft';
import midPageAdvert1Section from './mid-page-advert-1';
import midPageAdvert2Section from './mid-page-advert-2';
import opinionSection from './opinion';
import technologySection from './technology';
import headlinesSection from './headlines';
import topStoriesSection from './top-stories';
import brexitCoverageSection from './brexit-coverage';
import brexitBuildupSection from './brexit-buildup';
import videosSection from './videos';

import layouts from '../layouts';

const sections = {
	'editors-picks': editorsPicksSection,
	'life-and-arts': lifeAndArtsSection,
	markets: marketsSection,
	'most-popular': mostPopularSection,
	myft: myftSection,
	'mid-page-advert-1': midPageAdvert1Section,
	'mid-page-advert-2': midPageAdvert2Section,
	opinion: opinionSection,
	technology: technologySection,
	'headlines': headlinesSection,
	'top-stories': topStoriesSection,
	'brexit-coverage': brexitCoverageSection,
	'brexit-buildup': brexitBuildupSection,
	videos: videosSection
};

export default (sectionId, data, flags) => {
	const section = sections[sectionId]({ data, flags });
	const layout = layouts[section.layoutId];
	return Object.assign({}, section, { data, layout });
}
