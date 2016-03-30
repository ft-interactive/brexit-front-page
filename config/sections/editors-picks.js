export default ({ flags }) => ({
	id: 'editors-picks',
	title: flags.frontPageNewLayout ? 'Highlights' : 'Editor\'s Picks',
	style: 'editors-picks',
	layoutId: flags.frontPageNewLayout ? 'editors-picks-new' : 'editors-picks',
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
		},
	}
})
