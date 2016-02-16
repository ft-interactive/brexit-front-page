import { format as dateFormat } from 'o-date';

import FastFt from '../../shared/components/fast-ft/fast-ft';

const date = dateFormat(new Date(), 'EEEE MMMM yyyy');

const getLayout = (content, flags) => {
	const layoutHint = content.layoutHint;

	if (flags.frontPageMultipleLayouts) {
		switch(layoutHint) {
			case 'standaloneimage':
				return 'top-stories-picture-story';
			case 'landscape':
				return 'top-stories-landscape';
			case 'assassination':
			case 'bigstory':
				return 'top-stories-bigstory';
			case 'standard':
			default:
				return 'top-stories';
		}
	} else {
		return 'top-stories';
	}
};
export default ({ content, flags }) => ({
	id: 'top-stories',
	title: 'Top Stories',
	style: 'top-stories',
	date: date,
	isTab: true,
	layoutId: getLayout(content, flags),
	trackable: getLayout(content, flags),
	size: {
		default: 12
	},
	sidebarComponent: {
		id: 'fastft',
		component: FastFt,
		isTab: true
	},
	cols: {
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
