export default (data) => ({
	id: 'editors-picks',
	title: 'Highlights',
	style: 'editors-picks',
	layoutId: data.flags.asymmetricalFrontPageLayout ? 'editors-picks-asymmetrical' : 'editors-picks',
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
