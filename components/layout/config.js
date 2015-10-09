import {format as dateFormat} from 'o-date';
import FastFt from '../fast-ft/fast-ft';

const date = dateFormat(new Date(), 'EEEE MMMM yyyy');

export default [
	{
		id: 'top-stories',
		title: 'Top Stories',
		style: 'top-stories',
		date: date,
		cards: [
			{ column: 0, width: 5, tagSize: 'large', titleSize: 'large', standFirst: 'large', image: 'always', related: 3 },
			{ column: 1, width: 4, tagSize: 'large', titleSize: 'medium', standFirst: 'medium', image: 'desktop'},
			{ column: 1, width: 4, tagSize: 'large', titleSize: 'medium' },
			{ column: 2, width: 3, tagSize: 'medium', titleSize: 'small', image: 'desktop'},
			{ column: 2, width: 3, tagSize: 'small', titleSize: 'tiny'},
			{ column: 2, width: 3, tagSize: 'small', titleSize: 'tiny'},
			{ column: 2, width: 3, tagSize: 'small', titleSize: 'tiny'}
		],
		// FIXME sidebarComponent needs more thinking, maybe unifiying with card
		// styles when we have those
		sidebarComponent: FastFt
	},
	{
		id: 'opinion',
		title: 'Opinion',
		style: 'opinion',
		cards: [
			{ column: 0, width: 3, tagSize: 'large', titleSize: 'large', standFirst: 'large', image: 'always' },
			{ column: 1, width: 3, tagSize: 'large', titleSize: 'medium', standFirst: 'medium'},
			{ column: 1, width: 3, tagSize: 'large', titleSize: 'medium', standFirst: 'medium'},
			{ column: 2, width: 4, ad: true },
			{ column: 2, width: 4, tagSize: 'large', titleSize: 'medium' },
			{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
			{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small' },
			{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small' }
		]
	},
	{
		id: 'editors-pics',
		title: 'Editor\'s Picks',
		style: 'editors-pics',
		cards: [
			{ column: 0, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
			{ column: 1, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
			{ column: 2, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
			{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
			{ column: 4, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
			{ column: 5, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' }
		]
	}
];
