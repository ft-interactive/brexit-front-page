export default () => ({
	id: 'videos', // Note: calling this "video" breaks BB10
	trackable: 'video',
	title: 'Video',
	style: 'video',
	role: 'complementary',
	layoutId: 'video',
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
