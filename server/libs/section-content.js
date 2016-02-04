/**
 * take data from graphql and massage it into a format needed by the sections
 */
export default data => ({
	['top-stories']: {
		main: data.frontPage.topStory.items.concat(data.frontPage.top.items.slice(1)),
		sidebar: data.frontPage.fastFT.items
	},
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
