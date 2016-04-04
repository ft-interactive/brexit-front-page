export default ({ flags }) => ({
	id: 'technology',
	title: 'Technology',
	style: 'technology',
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
