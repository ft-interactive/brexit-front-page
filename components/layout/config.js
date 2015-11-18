import {format as dateFormat} from 'o-date';
import FastFt from '../fast-ft/fast-ft';

const date = dateFormat(new Date(), 'EEEE MMMM yyyy');

export default [
	{
		id: 'top-stories',
		title: 'Top Stories',
		style: 'top-stories',
		date: date,
		cards: {
			default: [
				{ size: 'large', standFirst: true, image: true, related: 1 },
				{ size: 'medium', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'tiny', landscape: true },
				{ size: 'tiny', landscape: true },
				{ size: 'tiny', image: true, landscape: true },
				{ size: 'tiny', landscape: true }
			],
			S: [
				{ size: 'large', standFirst: true, image: true, related: 3 },
				{ size: 'medium', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'small', landscape: true },
				{ size: 'tiny', landscape: true },
				{ size: 'tiny', landscape: true },
				{ size: 'tiny', image: true, landscape: true },
				{ size: 'tiny', landscape: true }
			],
			M: [
				{ column: 0, width: 5, size: 'large', standFirst: true, image: true, related: 3 },
				{ column: 0, width: 5, size: 'medium' },
				{ column: 1, width: 4, size: 'small' },
				{ column: 1, width: 4, size: 'small' },
				{ column: 1, width: 4, size: 'small' },
				{ column: 1, width: 4, size: 'small' },
				{ column: 1, width: 4, size: 'small' },
				{ column: 2, width: 3, size: 'tiny' },
				{ column: 2, width: 3, size: 'tiny' },
				{ column: 2, width: 3, size: 'tiny', image: true },
				{ column: 2, width: 3, size: 'tiny' }
			]
		},
		// FIXME sidebarComponent needs more thinking, maybe unifiying with card
		// styles when we have those
		sidebarComponent: FastFt,
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
	},
	{
		id: 'opinion',
		title: 'Opinion',
		style: 'opinion',
		cards: {
			default: [
				{ size: 'large', standFirst: true, image: true },
				{ size: 'medium', standFirst: true },
				{ size: 'medium', standFirst: true },
				{ size: 'small' },
				// { ad: true },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' }
			],
			S: [
				{ size: 'large', standFirst: true, image: true },
				{ size: 'medium', standFirst: true },
				{ size: 'medium', standFirst: true },
				{ size: 'small' },
				// { ad: true },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' }
			],
			M: [
				{ column: 0, width: 4, size: 'large', standFirst: true, image: true },
				{ column: 1, width: 3, size: 'medium' },
				{ column: 1, width: 3, size: 'medium', image: true },
				{ column: 2, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small' },
				{ column: 2, width: 3, size: 'small' },
				// { column: 3, width: 4, ad: true },
				{ column: 3, width: 2, size: 'tiny' },
				{ column: 3, width: 2, size: 'tiny' },
				{ column: 3, width: 2, size: 'tiny', image: true },
				{ column: 3, width: 2, size: 'tiny' }
			]
		},
		cols: {
			meta: {
				default: 12
			},
			content: {
				default: 12
			}
		}
	},
	{
		id: 'editors-picks',
		title: 'Editor\'s Picks',
		style: 'editors-picks',
		cards: {
			default: [
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' }
			],
			S: [
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' },
				{ size: 'small' }
			],
			M: [
				{ column: 0, width: 2, size: 'small', image: true },
				{ column: 1, width: 2, size: 'small', image: true },
				{ column: 2, width: 2, size: 'small', image: true },
				{ column: 3, width: 2, size: 'small', image: true },
				{ column: 4, width: 2, size: 'small', image: true },
				{ column: 5, width: 2, size: 'small', image: true }
			]
		},
		cols: {
			meta: {
				default: 12
			},
			content: {
				default: 12
			}
		}
	},
	{
		id: 'around-the-ft',
		title: 'Around the FT',
		style: 'around-the-ft',
		cards: {
			default: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			S: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			M: [
				{ column: 0, width: 4, size: 'small', image: true, landscape: true },
				{ column: 0, width: 4, size: 'small' },
				{ column: 1, width: 4, size: 'small', image: true, landscape: true },
				{ column: 1, width: 4, size: 'small' },
				{ column: 2, width: 4, size: 'small', image: true, landscape: true },
				{ column: 2, width: 4, size: 'small' }
			]
		},
		cols: {
			meta: {
				default: 12
			},
			content: {
				default: 12
			}
		}
	},
	{
		id: 'video',
		title: 'Video',
		style: 'video',
		cards: {
			default: [
				{ column: 0, width: 12 },
				{ column: 1, width: 12 },
				{ column: 2, width: 12 },
				{ column: 3, width: 12 },
				{ column: 4, width: 12 },
				{ column: 5, width: 12 }
			],
			S: [
				{ column: 0, width: 6 },
				{ column: 1, width: 6 },
				{ column: 0, width: 6 },
				{ column: 1, width: 6 },
				{ column: 0, width: 6 },
				{ column: 1, width: 6 }
			],
			M: [
				{ column: 0, width: 2 },
				{ column: 1, width: 2 },
				{ column: 2, width: 2 },
				{ column: 3, width: 2 },
				{ column: 4, width: 2 },
				{ column: 5, width: 2 }
			]
		},
		cols: {
			meta: {
				default: 12
			},
			content: {
				default: 12
			}
		}
	}
];
