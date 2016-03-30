export default ({ flags }) => ({
	id: 'most-popular',
	title: 'Most Read',
	style: 'most-popular',
	layoutId: flags.frontPageNewLayout ? 'most-popular-new' : 'most-popular',
	trackScrollEvent: true,
	size: {
		default: 12
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
