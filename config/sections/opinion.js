export default (data) => ({
	id: 'opinion',
	title: '<a href="/stream/sectionsId/MTE2-U2VjdGlvbnM=" class="section-meta__link" data-trackable="section-title">Opinion</a>',
	style: 'opinion',
	layoutId: data.flags.frontPageLayout === 'asymmetrical' ? 'opinion-asymmetrical' : 'opinion',
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
