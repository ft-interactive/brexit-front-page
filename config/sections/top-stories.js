const getLayout = (layoutHint, flags) => {
	return flags && flags.asymmetricalFrontPageLayout ?
		'top-stories-asymmetrical' :
		'top-stories';
};

export default ({ data, flags }) => ({
	id: 'top-stories',
	title: 'Top Stories',
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
