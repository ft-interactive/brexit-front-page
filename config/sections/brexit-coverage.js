export default () => ({
	id: 'brexit-coverage',
	title: '<a href="/stream/topicsId/NDdiMzAyNzctMTRlMy00Zjk1LWEyZjYtYmYwZWIwYWU2NzAy-VG9waWNz">UK\'S EU REFERENDUM</a>',
	style: 'brexit-coverage',
	// isTab: true, // ?
	layoutId: 'brexit-coverage', // can add other ones later if nec, e.g. `brexit-coverage-flipped`
	trackable: 'brexit-coverage', // should be same as layoutId
	trackScrollEvent: true,
	// background: true, // ?
	followButton: {
		conceptId: 'NDdiMzAyNzctMTRlMy00Zjk1LWEyZjYtYmYwZWIwYWU2NzAy-VG9waWNz',
		name: 'UK\'s EU referendum',
		taxonomy: 'topics'
	},
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
