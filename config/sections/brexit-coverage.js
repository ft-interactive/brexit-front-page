export default () => ({
	id: 'brexit-coverage',
	title: 'UK\'s EU REFERENDUM',
	// style: 'brexit-coverage', // ?
	// isTab: true, // ?
	layoutId: 'brexit-coverage', // can add other ones later if nec, e.g. `brexit-coverage-flipped`
	trackable: 'brexit-coverage', // should be same as layoutId
	trackScrollEvent: true,
	// background: true, // ?
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
