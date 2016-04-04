export default ({ flags }) => ({
	id: 'markets',
	title: flags.frontPageNewLayout ? 'Markets News' : 'Markets',
	style: 'markets',
	layoutId: flags.frontPageNewLayout ? 'featured-section-new' : 'featured-section',
	trackScrollEvent: true,
	size: {
		default: 12,
		M: flags.frontPageNewLayout ? 6 : 4,
	},
	cols: {
		meta: {
			default: 12
		},
		content: {
			default: 12
		}
	}
})
