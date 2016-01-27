import editorsPicksSection from './editors-picks';
import lifeAndArtsSection from './life-and-arts';
import marketsSection from './markets';
import mostPopularSection from './most-popular';
import myftSection from './myft';
import opinionSection from './opinion';
import technologySection from './technology';
import topStoriesSection from './top-stories';
import videosSection from './videos';

import layouts from '../layouts';

const sections = {
    'editors-picks': editorsPicksSection,
    'life-and-arts': lifeAndArtsSection,
    markets: marketsSection,
    'most-popular': mostPopularSection,
    myft: myftSection,
    opinion: opinionSection,
    technology: technologySection,
    'top-stories': topStoriesSection,
    videos: videosSection
};

export default (sectionId, content, flags) => {
    const section = sections[sectionId]({ content, flags });
    const layout = layouts[section.layoutId];
    return Object.assign({}, section, { content, layout });
}
