export default ({ data }) => ({
	id: 'mid-page-advert',
	style: 'mid-page-advert-2',
	layoutId: data.adsLayout === 'superleaders' ? 'mid-page-advert-2-billboard' : 'mid-page-advert-2-superleaderboard',
	size: {
		default: 12
	},
	cols: {
		content: {
			default: 12
		}
	}
})
