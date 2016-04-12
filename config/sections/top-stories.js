const getLayout = layoutHint => {
	switch(layoutHint) {
		case 'standaloneimage':
			return 'top-stories-picture-story';
		case 'landscape':
			return 'top-stories-landscape';
		case 'assassination':
		case 'bigstory':
			return 'top-stories-big-story';
		case 'standard':
		default:
			return 'top-stories';
	}
};
export default ({ data }) => ({
	id: 'top-stories',
	title: 'Top Stories',
	style: 'top-stories',
	isTab: true,
	layoutId: getLayout(data.layoutHint),
	trackable: getLayout(data.layoutHint),
	trackScrollEvent: true,
	background: true,
	size: {
		default: 12
	},
	cols: {
		content: {
			default: 12
		}
	}
})
