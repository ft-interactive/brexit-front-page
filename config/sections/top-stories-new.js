const getLayout = (data, flags) => {
	const layoutHint = data.layoutHint;

	if (flags.frontPageMultipleLayouts) {
		switch(layoutHint) {
			case 'standaloneimage':
				return 'top-stories-picture-story-new';
			case 'landscape':
				return 'top-stories-landscape-new';
			case 'assassination':
			case 'bigstory':
				return 'top-stories-big-story-new';
			case 'standard':
			default:
				return 'top-stories-new';
		}
	} else {
		return 'top-stories-new';
	}
};
export default ({ data, flags }) => ({
	id: 'top-stories',
	title: 'Top Stories',
	style: 'top-stories',
	isTab: true,
	layoutId: getLayout(data, flags),
	trackable: getLayout(data, flags),
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
