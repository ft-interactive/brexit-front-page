export default ({ flags }) => ({
	id: 'markets',
	title: `<a href="/markets" class="section-meta__link" data-trackable="section-title">${flags.frontPageNewLayout ? 'Markets News' : 'Markets'}</a>`,
	style: 'markets',
	layoutId: flags.frontPageNewLayout ? 'featured-section-new' : 'featured-section',
	trackScrollEvent: true,
	size: {
		default: 12,
		M: flags.frontPageNewLayout ? 6 : 4,
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
