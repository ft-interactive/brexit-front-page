export default ({ flags }) => ({
	id: 'opinion',
	title: 'Opinion',
	style: 'opinion',
	layoutId: flags.frontPageNewLayout ? 'opinion-new' : 'opinion',
	trackScrollEvent: true,
	background: true,
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
