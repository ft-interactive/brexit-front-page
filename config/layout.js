import {format as dateFormat} from 'o-date';
import FastFt from '../components/fast-ft/fast-ft';

const date = dateFormat(new Date(), 'EEEE MMMM yyyy');

import { mostPopular } from './queries';

export default [
	{
		id: 'top-stories',
		title: 'Top Stories',
		style: 'top-stories',
		date: date,
		isTab: true,
		getContent: (content) => ({
			body: content.top.items,
			sidebar: content.fastFT
		}),
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
		overrides: [
			//Different layout if top story has related links
			{
				condition: (items) => {
					return items[0] && items[0].relatedContent && items[0].relatedContent.length > 2;
				},
				cards: {
					M: [
						{ column: 0, width: 5, size: 'large', standFirst: true, image: true, related: 3 },
						{ column: 1, width: 4, size: 'small' },
						{ column: 1, width: 4, size: 'small' },
						{ column: 1, width: 4, size: 'small' },
						{ column: 1, width: 4, size: 'small' },
						{ column: 2, width: 3, size: 'tiny' },
						{ column: 2, width: 3, size: 'tiny' },
						{ column: 2, width: 3, size: 'tiny', image: true },
						{ column: 2, width: 3, size: 'tiny' }
					]
				}
			}
		],
		size: {
			default: 12
		},
		// FIXME sidebarComponent needs more thinking, maybe unifiying with card
		// styles when we have those
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
	},
	{
		id: 'opinion',
		title: 'Opinion',
		style: 'opinion',
		getContent: (content) => ({
			body: content.opinion.items
		}),
		cards: {
			default: [
				{ size: 'medium', standFirst: true, image: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'tiny' },
				{ size: 'tiny', image: true, landscape: true },
				{ size: 'tiny' }
			],
			S: [
				{ size: 'medium', standFirst: true, image: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'tiny' },
				{ size: 'tiny', image: true, landscape: true },
				{ size: 'tiny' }
			],
			M: [
				{ column: 0, width: 3, size: 'medium', standFirst: true, image: true },
				{ column: 1, width: 3, size: 'small' },
				{ column: 1, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small' },
				{ column: 3, width: 3, size: 'tiny' },
				{ column: 3, width: 3, size: 'tiny', image: true },
				{ column: 3, width: 3, size: 'tiny' }
			],
			L: [
				{ column: 0, width: 3, size: 'large', standFirst: true, image: true },
				{ column: 1, width: 3, size: 'medium' },
				{ column: 1, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small' },
				{ column: 3, width: 3, size: 'tiny' },
				{ column: 3, width: 3, size: 'tiny', image: true },
				{ column: 3, width: 3, size: 'tiny' }
			]
		},
		size: {
			default: 12
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
		getContent: (content) => ({
			body: content.editorsPicks.items
		}),
		cards: {
			default: [
				{ size: 'tiny', landscape: true, image: true, imageStick: true },
				{ size: 'tiny', landscape: true, image: true, imageStick: true },
				{ size: 'tiny', landscape: true, image: true, imageStick: true },
				{ size: 'tiny', landscape: true, image: true, imageStick: true },
				{ size: 'tiny', landscape: true, image: true, imageStick: true },
				{ size: 'tiny', landscape: true, image: true, imageStick: true }
			],
			S: [
				{ column: 0, width: 6, size: 'small', image: true, imageStick: true },
				{ column: 1, width: 6, size: 'small', image: true, imageStick: true },
				{ column: 0, width: 6, size: 'small', image: true, imageStick: true },
				{ column: 1, width: 6, size: 'small', image: true, imageStick: true },
				{ column: 0, width: 6, size: 'small', image: true, imageStick: true },
				{ column: 1, width: 6, size: 'small', image: true, imageStick: true }
			],
			M: [
				{ column: 0, width: 4, size: 'small', image: true, imageStick: true },
				{ column: 1, width: 4, size: 'small', image: true, imageStick: true },
				{ column: 2, width: 4, size: 'small', image: true, imageStick: true },
				{ column: 0, width: 4, size: 'small', image: true, imageStick: true },
				{ column: 1, width: 4, size: 'small', image: true, imageStick: true },
				{ column: 2, width: 4, size: 'small', image: true, imageStick: true }
			],
			L: [
				{ column: 0, width: 2, size: 'small', image: true, imageStick: true },
				{ column: 1, width: 2, size: 'small', image: true, imageStick: true },
				{ column: 2, width: 2, size: 'small', image: true, imageStick: true },
				{ column: 3, width: 2, size: 'small', image: true, imageStick: true },
				{ column: 4, width: 2, size: 'small', image: true, imageStick: true },
				{ column: 5, width: 2, size: 'small', image: true, imageStick: true }
			]
		},
		size: {
			default: 12
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
		id: 'most-popular',
		title: 'Most Popular',
		style: 'most-popular',
		getContent: (content) => ({
			body: content.popularArticles
		}),
		dynamicContent: {
			query: (uuid) => (mostPopular('industry', uuid)),
			parseResults: (data) => data.popularFromHui,
			sources: [
				{ uuid: 'initial',
					title: 'All'
				},
				{
					"uuid": "http://api.ft.com/things/69e2a0db-7971-3741-8865-e31e02400278",
					"title": "Accountancy & tax advisory"
				},
				{
					"uuid": "http://api.ft.com/things/0c9eb6d9-b4e0-3486-8fe2-46e60afb8597",
					"title": "Aerospace & defence"
				},
				{
					"uuid": "http://api.ft.com/things/077bea1d-01ca-328e-aa0b-d7dc92796030",
					"title": "Automobiles"
				},
				{
					"uuid": "http://api.ft.com/things/040b623c-dde7-3a56-a061-f1d49fee3836",
					"title": "Basic resources/mining"
				},
				{
					"uuid": "http://api.ft.com/things/b25cafff-0d4e-3364-9ef7-d47c4b2f73fe",
					"title": "Chemicals"
				},
				{
					"uuid": "http://api.ft.com/things/86d3d1e0-3a39-331d-83e5-e8bfd1bf58a0",
					"title": "Comms/Publishing/Media"
				},
				{
					"uuid": "http://api.ft.com/things/1bc1d5b2-e161-3c1b-ac0e-d2a3fb5fa04c",
					"title": "Consulting/business services"
				},
				{
					"uuid": "http://api.ft.com/things/6b99b667-4fdb-30c8-87e0-9a4e61eb53a2",
					"title": "Education/Academia"
				},
				{
					"uuid": "http://api.ft.com/things/c4b9c679-fc51-337a-9019-42794eb56eda",
					"title": "Energy/utilities"
				},
				{
					"uuid": "http://api.ft.com/things/f840d786-f738-39c4-99b3-f5d25c000954",
					"title": "Engineering/construction"
				},
				{
					"uuid": "http://api.ft.com/things/e9bd1187-830d-372f-8dec-c942e29efca2",
					"title": "Financial services"
				},
				{
					"uuid": "http://api.ft.com/things/bd09ff46-7f95-3c80-8c66-dd87eaffe082",
					"title": "Food & beverages"
				},
				{
					"uuid": "http://api.ft.com/things/70c2ecd5-3f3c-3d3e-b582-e2ed32f763b5",
					"title": "Govt/public service/NGO"
				},
				{
					"uuid": "http://api.ft.com/things/e906af5b-04ba-3a40-a327-20f27a518168",
					"title": "Health & pharmaceuticals"
				},
				{
					"uuid": "http://api.ft.com/things/751462e7-6446-3ef6-975a-59e41f13c2ed",
					"title": "IT/Tech/Telecoms"
				},
				{
					"uuid": "http://api.ft.com/things/ba3daeed-8da7-36ea-bd97-e871900588aa",
					"title": "IT/computing"
				},
				{
					"uuid": "http://api.ft.com/things/42cf64ec-ce25-3fd6-9e3e-7db2055be547",
					"title": "Industrial goods & services"
				},
				{
					"uuid": "http://api.ft.com/things/904a96fa-4f8f-39c7-9ab6-e358dcdd04d8",
					"title": "Insurance"
				},
				{
					"uuid": "http://api.ft.com/things/e06b5804-ea84-37c5-9241-d2037cca4d68",
					"title": "Oil/gas/mining"
				},
				{
					"uuid": "http://api.ft.com/things/4726c6b7-c97f-3f6c-8237-c9e373b6c072",
					"title": "Personal & household goods"
				},
				{
					"uuid": "http://api.ft.com/things/183bb17e-ba42-32e0-a0b2-e31f491ff930",
					"title": "Property"
				},
				{
					"uuid": "http://api.ft.com/things/29bbf1e5-04c8-3886-9298-a366496fa866",
					"title": "Retail"
				},
				{
					"uuid": "http://api.ft.com/things/046d89d7-95f1-30bc-a283-1a5ecd0c0007",
					"title": "Telecommunications"
				},
				{
					"uuid": "http://api.ft.com/things/c4526d45-79ef-35ff-844c-df94690a157b",
					"title": "Trade/import/export"
				},
				{
					"uuid": "http://api.ft.com/things/a53abf79-982e-3fa3-b46b-3dd5db56bb8d",
					"title": "Transport/logistics"
				},
				{
					"uuid": "http://api.ft.com/things/bed86acc-ab31-3952-b9a7-c990ea4acc65",
					"title": "Travel & leisure"
				}
			]
		},
		cards: {
			default: [
				{ size: 'medium', standFirst: true, image: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'tiny' },
				{ size: 'tiny' },
				{ size: 'tiny' },
				{ size: 'tiny' }
			],
			S: [
				{ size: 'medium', standFirst: true, image: true },
				{ size: 'small' },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' },
				{ size: 'tiny' },
				{ size: 'tiny' },
				{ size: 'tiny' },
				{ size: 'tiny' }
			],
			M: [
				{ column: 0, width: 3, size: 'medium', standFirst: true, image: true },
				{ column: 1, width: 3, size: 'small' },
				{ column: 1, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small' },
				{ column: 3, width: 3, size: 'tiny' },
				{ column: 3, width: 3, size: 'tiny' },
				{ column: 3, width: 3, size: 'tiny' }
			],
			L: [
				{ column: 0, width: 3, size: 'large', standFirst: true, image: true },
				{ column: 1, width: 3, size: 'medium' },
				{ column: 1, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small', image: true },
				{ column: 2, width: 3, size: 'small' },
				{ column: 3, width: 3, size: 'tiny' },
				{ column: 3, width: 3, size: 'tiny' },
				{ column: 3, width: 3, size: 'tiny' },
				{ column: 3, width: 3, size: 'tiny' }
			]
		},
		size: {
			default: 12
		},
		cols: {
			meta: {
				default: 12
			},
			sources: {
				default: 12
			},
			content: {
				default: 12
			}
		}
	},
	{
		id: 'technology',
		title: 'Technology',
		style: 'technology',
		getContent: (content) => ({
			body: content.technology.items
		}),
		cards: {
			default: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			S: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			M: [
				{ size: 'small', image: true, landscape: false },
				{ size: 'small' }
			],
			L: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			]
		},
		size: {
			default: 12,
			M: 4
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
		id: 'markets',
		title: 'Markets',
		style: 'markets',
		getContent: (content) => ({
			body: content.markets.items
		}),
		cards: {
			default: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			S: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			M: [
				{ size: 'small', image: true, landscape: false },
				{ size: 'small' }
			],
			L: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			]
		},
		size: {
			default: 12,
			M: 4
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
		id: 'life-and-arts',
		title: 'Life & Arts',
		style: 'life-and-arts',
		getContent: (content) => ({
			body: content.lifestyle.items
		}),
		cards: {
			default: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			S: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			],
			M: [
				{ size: 'small', image: true, landscape: false },
				{ size: 'small' }
			],
			L: [
				{ size: 'small', image: true, landscape: true },
				{ size: 'small' }
			]
		},
		size: {
			default: 12,
			M: 4
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
		getContent: (content) => ({
			body: content.videos.map(video => Object.assign({}, { type: 'video' }, video))
		}),
		cards: {
			default: [
				{ column: 0, width: 12 },
				{ column: 1, width: 12 },
				{ column: 2, width: 12 },
				{ column: 3, width: 12 }
			],
			S: [
				{ column: 0, width: 6 },
				{ column: 1, width: 6 },
				{ column: 0, width: 6 },
				{ column: 1, width: 6 }
			],
			M: [
				{ column: 0, width: 3 },
				{ column: 1, width: 3 },
				{ column: 2, width: 3 },
				{ column: 3, width: 3 }
			]
		},
		size: {
			default: 12
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
