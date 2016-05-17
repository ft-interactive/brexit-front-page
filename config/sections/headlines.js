const getLayout = (layoutHint) => {
	switch(layoutHint) {
		case 'standaloneimage':
			return 'headlines-picture-story';
		case 'landscape':
			return 'headlines-landscape';
		case 'assassination':
		case 'bigstory':
			return 'headlines-big-story';
		case 'standard':
		default:
			return 'headlines';
	}
};
export default ({ data, flags }) => ({
	id: 'headlines',
	title: 'Headlines',
	style: 'top-stories',
	isTab: true,
	layoutId: getLayout(data.layoutHint, flags),
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
