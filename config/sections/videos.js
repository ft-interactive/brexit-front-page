export default () => ({
	id: 'videos', // Note: calling this "video" breaks BB10
	trackable: 'video',
	title: '<a href="http://video.ft.com/" class="section-meta__link" data-trackable="section-title">Video</a>',
	style: 'video',
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
