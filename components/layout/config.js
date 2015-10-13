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
			{ column: 0, width: 5, size: 'large', standFirst: true, image: 'always', related: 3 },
			{ column: 1, width: 4, size: 'medium', standFirst: true, image: 'desktop'},
			{ column: 1, width: 4, size: 'medium' },
			{ column: 2, width: 3, size: 'small', image: 'desktop'},
			{ column: 2, width: 3, size: 'tiny' },
			{ column: 2, width: 3, size: 'tiny' },
			{ column: 2, width: 3, size: 'tiny' }
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
			{ column: 0, width: 3, size: 'large', standFirst: true, image: 'always' },
			{ column: 1, width: 3, size: 'medium', standFirst: true },
			{ column: 1, width: 3, size: 'medium', standFirst: true },
			{ column: 2, width: 2, size: 'small', image: 'desktop' },
			{ column: 2, width: 2, size: 'small' },
			{ column: 2, width: 2, size: 'small' },
			{ column: 3, width: 4, size: 'small' },
			{ column: 3, width: 4, ad: true }
		]
	},
	{
		id: 'editors-pics',
		title: 'Editor\'s Picks',
		style: 'editors-picks',
		cards: [
			{ column: 0, width: 2, size: 'small', image: 'desktop' },
			{ column: 1, width: 2, size: 'small', image: 'desktop' },
			{ column: 2, width: 2, size: 'small', image: 'desktop' },
			{ column: 3, width: 2, size: 'small', image: 'desktop' },
			{ column: 4, width: 2, size: 'small', image: 'desktop' },
			{ column: 5, width: 2, size: 'small', image: 'desktop' }
		]
	}
];
