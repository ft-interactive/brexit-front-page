/**
 * take data from graphql and massage it into a format needed by the sections
 */

const dedupe = (item, index, items) => !item.id || items.findIndex(otherItem => otherItem.id === item.id) === index;

const getTopStoriesData = (data, flags = {}) => {
	let main = data.frontPage.topStory.items.concat(data.frontPage.top.items.slice(1));
	let layoutHint = flags.frontPageMultipleLayouts ? data.frontPage.topStoriesList.layoutHint : 'standard';
	if (flags.frontPageMultipleLayouts) {
		if (
			data.frontPage.topStoriesList &&
			data.frontPage.topStoriesList.items &&
			data.frontPage.topStoriesList.items.length
		) {
			// Picture stories don't come through the page API, so if we have one, take it from the list and put it in
			// the second position
			if (layoutHint === 'standaloneimage') {
				main.splice(1, 0, data.frontPage.topStoriesList.items[0]);
			} else if (['bigstory', 'assassination'].includes(layoutHint)) {
				// Big story takes the first story from the list, with the next three as related
				const bigStory = data.frontPage.topStoriesList.items[0];
				bigStory.relatedContent = data.frontPage.topStoriesList.items.slice(1, 4);
				main.unshift(bigStory);
			}
		} else {
			// No picture story available, so default to normal layout
			layoutHint = 'standard';
		}
	}
	// NOTE: only needed while maintaining both a list and a page, but dedupe
	main = main.filter(dedupe);
	return {
		layoutHint,
		main,
		sidebar: data.frontPage.fastFT.items
	}

};

export default (data, flags) => ({
	'top-stories': getTopStoriesData(data, flags),
	'top-stories-more': {
		main: (() => {
			const topStories = getTopStoriesData(data, flags);
			let moreStoriesOffset;
			if (topStories.layoutHint === 'bigstory') {
				moreStoriesOffset = 6;
			} else if (topStories.layoutHint === 'standaloneimage') {
				moreStoriesOffset = 9;
			} else {
				moreStoriesOffset = 8;
			}
			return topStories.main.slice(moreStoriesOffset);
		})()
	},
	opinion: {
		main: data.frontPage.opinion.items
	},
	myft: {
		main: data.popularTopics && data.popularTopics.popularTopics
	},
	'mid-page-advert-1': {
		main: ['no-content-needed'] //HACK: Section component requires everything to have content so hack in some fake stuff
	},
	'mid-page-advert-2': {
		main: ['no-content-needed'] //HACK: Section component requires everything to have content so hack in some fake stuff
	},
	'editors-picks': {
		main: data.frontPage.editorsPicks.items
	},
	'most-popular': {
		main: data.frontPage.popularArticles
	},
	technology: {
		main: data.frontPage.technology.items
	},
	markets: {
		main: data.frontPage.markets.items
	},
	'life-and-arts': {
		main: data.frontPage.lifestyle.items
	},
	videos: {
		main: data.frontPage.videos
	}
});
