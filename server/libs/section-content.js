/**
 * take data from graphql and massage it into a format needed by the sections
 */

const getTopStoriesData = (data, flags = {}) => {
	let main = data.frontPage.topStory.items.concat(data.frontPage.top.items.slice(1));
	let layoutHint = flags.frontPageMultipleLayouts ? data.frontPage.topStoriesList.layoutHint : 'standard';
	if(flags && flags.frontPageMultipleLayouts && layoutHint === 'standaloneimage') {
		if(data.frontPage.topStoriesList && data.frontPage.topStoriesList.items && data.frontPage.topStoriesList.items.length) {
			//Picture stories don't come through the page API, so if we have one, take it from the list and put it in the second positio
			main.splice(1, 0, data.frontPage.topStoriesList.items[0]);
		} else {
			//No picture story available, so default to normal layout
			layoutHint = 'standard';
		}
	}
	return {
		layoutHint: layoutHint || 'standard',
		main,
		sidebar: data.frontPage.fastFT.items
	}

};

export default (data, flags) => ({
	['top-stories']: getTopStoriesData(data, flags),
	opinion: {
		main: data.frontPage.opinion.items
	},
	myft: {
		main: data.popularTopics && data.popularTopics.popularTopics
	},
	['editors-picks']: {
		main: data.frontPage.editorsPicks.items
	},
	['most-popular']: {
		main: data.frontPage.popularArticles
	},
	technology: {
		main: data.frontPage.technology.items
	},
	markets: {
		main: data.frontPage.markets.items
	},
	['life-and-arts']: {
		main: data.frontPage.lifestyle.items
	},
	videos: {
		main: data.frontPage.videos
	}
});
