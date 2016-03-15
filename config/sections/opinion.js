export default ({ flags }) => ({
	id: 'opinion',
	title: 'Opinion',
	style: 'opinion',
	role: 'complementary',
	layoutId: (flags.frontPageOpinionCards) ? 'opinion-new' : 'opinion',
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
