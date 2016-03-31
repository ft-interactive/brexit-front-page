import FastFt from '../../shared/components/fast-ft/fast-ft';

const getLayout = (layoutHint) => {
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
export default ({ data, flags }) => ({
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
	sidebarComponent: {
		id: 'fastft',
		component: FastFt,
		isTab: true,
		hideUntilDesktop: flags.frontPageFastFTJourney
	},
	cols: {
		meta: {
			default: 12,
			hide: true
		},
		content: {
			default: 12,
			L: 8,
			XL: 9
		},
		sidebar: {
			default: 12,
			L: 4,
			XL: 3
		}
	}
})
