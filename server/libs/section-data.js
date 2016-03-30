/**
 * take data from graphql and massage it into a format needed by the sections
 */
const dedupe = (item, index, items) => !item.id || items.findIndex(otherItem => otherItem.id === item.id) === index;

const getTopStoriesData = (data, flags = {}) => {
	let content = data.frontPage.topStory.items.concat(data.frontPage.top.items.slice(1));
	//let layoutHint = flags.frontPageMultipleLayouts ? data.frontPage.topStoriesList.layoutHint : 'standard';
	let layoutHint = 'bigstory';
	if (flags.frontPageMultipleLayouts && layoutHint !== 'landscape') {
		if (
			data.frontPage.topStoriesList &&
			data.frontPage.topStoriesList.items &&
			data.frontPage.topStoriesList.items.length
		) {
			// Picture stories don't come through the page API, so if we have one, take it from the list and put it in
			// the second position
			if (layoutHint === 'standaloneimage') {
				content.splice(1, 0, data.frontPage.topStoriesList.items[0]);
			} else if (['bigstory', 'assassination'].includes(layoutHint)) {
				// put three stories from the list after the first story
				content = data.frontPage.topStoriesList.items.slice(0, 4).concat(content);
			}
		} else {
			// No picture story available, so default to normal layout
			layoutHint = 'standard';
		}
	}
	// NOTE: only needed while maintaining both a list and a page, but dedupe
	content = content.filter(dedupe);

	return {
		layoutHint,
		content,
		sidebar: data.frontPage.fastFT,
		fastFt: data.frontPage.fastFT
	}

};

const getTopStoriesMoreData = (data, flags) => {
	const topStories = getTopStoriesData(data, flags);
	let moreStoriesOffset;
	if (topStories.layoutHint === 'bigstory') {
		moreStoriesOffset = 6;
	} else if (topStories.layoutHint === 'standaloneimage') {
		moreStoriesOffset = 9;
	} else {
		moreStoriesOffset = 8;
	}

	return { content: topStories.content.slice(moreStoriesOffset) };
};

export default (data, flags) => ({
	'top-stories': getTopStoriesData(data, flags),
	'top-stories-new': getTopStoriesData(data, flags),
	'top-stories-more': getTopStoriesMoreData(data, flags),
	'top-stories-more-new': getTopStoriesMoreData(data, flags),
	opinion: {
		content: data.frontPage.opinion.items
	},
	myft: {
		content: data.frontPage.popularTopics
	},
	'mid-page-advert-1': {
		content: ['no-content-needed'] //HACK: Section component requires everything to have content so hack in some fake stuff
	},
	'mid-page-advert-2': {
		content: ['no-content-needed'] //HACK: Section component requires everything to have content so hack in some fake stuff
	},
	'editors-picks': {
		content: data.frontPage.editorsPicks.items
	},
	'most-popular': {
		content: data.frontPage.popularArticles
	},
	technology: {
		content: data.frontPage.technology.items
	},
	markets: {
		content: data.frontPage.markets.items
	},
	'life-and-arts': {
		content: data.frontPage.lifestyle.items
	},
	videos: {
		content: data.frontPage.videos
	}
});
