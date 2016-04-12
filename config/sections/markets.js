export default () => ({
	id: 'markets',
	title: `<a href="/markets" class="section-meta__link" data-trackable="section-title">Markets News</a>`,
	style: 'markets',
	layoutId: 'featured-section',
	trackScrollEvent: true,
	size: {
		default: 12,
		M: 6,
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
