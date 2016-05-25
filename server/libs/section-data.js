/**
 * take data from graphql and massage it into a format needed by the sections
 */
const dedupe = (item, index, items) => !item.id || items.findIndex(otherItem => otherItem.id === item.id) === index;

const headlineStoryCount = layout => {
	switch(layout) {
		case 'bigstory': return 4;
		case 'landscape': return 1;
		case 'standaloneimage': return 2;
		default: return 5;
	}
};

const getLayoutHint = (data, flags) => {
	if(flags.frontPageLayout){
		return flags.frontPageLayout;
	}

	if(data.frontPage.topStoriesList && data.frontPage.topStoriesList.layoutHint){
		return data.frontPage.topStoriesList.layoutHint
	}

	return 'standard';
};

const getTopStoriesData = (data, flags = {}) => {
	let content = data.frontPage.topStory.items.concat(data.frontPage.top.items.slice(1));
	let layoutHint = getLayoutHint(data, flags);
	if (layoutHint !== 'landscape') {
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

//todo - this is the stupidest named function ever
const getTopStoriesWithoutMainStoriesData = (data, flags) => {
	let topStories = getTopStoriesData(data, flags);
	topStories.content = topStories.content.slice(headlineStoryCount(topStories.layoutHint));
	return topStories;
};

export default (data, flags) => ({
	'top-stories': getTopStoriesWithoutMainStoriesData(data, flags),
	'headlines': getTopStoriesData(data, flags),
	'top-stories-new': getTopStoriesData(data, flags),
	'top-stories-more': getTopStoriesMoreData(data, flags),
	'top-stories-more-new': getTopStoriesMoreData(data, flags),
	'brexit-buildup': {
		content: data.frontPage.brexitBuildup.items
	},
	opinion: {
		content: data.frontPage.opinion.items
	},
	myft: {
		content: data.frontPage.popularTopics
	},
	'mid-page-advert-1': {
		adsLayout: data.adsLayout
	},
	'mid-page-advert-2': {
		adsLayout: data.adsLayout
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
