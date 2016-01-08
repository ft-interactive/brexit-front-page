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
		layout: [
			//Column 0
			{
				type: 'column',
				colspan: { default: 12, M: 5 },
				cards:
				[
					{ type: 'content',
						size: { default: 'large' },
						related: { default: 1, M: 3},
						standFirst: { default: true },
						image: { default: true }
					},
					{ type: 'content',
						size: { default: 'medium' },
						landscape: { default: 'true' },
					}
				]
			},
			//Column 1
			{
				colspan: { default: 12, M: 4 },
				cards: [
					{ type: 'content',
						size: { default: 'small' },
						landscape: { default: 'true' }
					},
					{ type: 'content',
						size: { default: 'small' },
						landscape: { default: 'true' }
					},
					{ type: 'content',
						size: { default: 'small' },
						landscape: { default: 'true' }
					},
					{ type: 'content',
						size: { default: 'small' },
						landscape: { default: 'true' }
					},
					{ type: 'content',
						size: { default: 'small' },
						landscape: { default: 'true' }
					}
				],
			},
			//Column 2
			{
				colspan: { default: 12, M: 3 },
				cards: [
					{
						type: 'content',
						size: { default : 'tiny' },
						landscape: { default: 'true' }
					},
					{
						type: 'content',
						size: { default : 'tiny' },
						landscape: { default: 'true' }
					},
					{
						type: 'content',
						size: { default : 'tiny' },
						landscape: { default: 'true', M: false },
						image: { default: 'true' }
					},
					{
						type: 'content',
						size: { default : 'tiny' },
						landscape: { default: 'true' }
					}
				],
			}

		],
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
	},
	{
		id: 'opinion',
		title: 'Opinion',
		style: 'opinion',
		getContent: (content) => ({
			body: content.opinion.items
		}),
		layout: [
			//Column 0
			{
				colspan: { default: 12, M: 3 },
				cards:
				[
					{ type: 'content',
						size: { default: 'medium' },
						standFirst: { default: true },
						image: { default: true }
					}
				]
			},
			//Column 1
			{
				colspan: { default: 12, M: 3 },
				cards:
				[
					{
						type: 'content',
						size: { default: 'small' },
					},
					{
						type: 'content',
						size: { default: 'small' },
						image: { default: true },
						landscape: { default: true, M: false }
					},

				]
			},
			//Column 2
			{
				colspan: { default: 12, M: 3 },
				cards:
				[
				{
						type: 'content',
						size: { default: 'small' },
						image: { default: true },
						landscape: { default: true, M: false, }
					},
					{
						type: 'content',
						size: { default: 'small' },
					}
				]
			},
			//Column 3
			{
				colspan: { default: 12, M: 3 },
				cards:
				[
					{
						type: 'content',
						size: { default: 'tiny' },
					},
					{
						type: 'content',
						size: { default: 'tiny' },
						image: { default: true },
						landscape: { default: true, M: false }
					},
					{
						type: 'content',
						size: { default: 'tiny' },
					}
				]
			},
		],
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
		layout: [
			//Column 0
			{
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				cards:
				[
					{ type: 'content',
						size: { default: 'tiny', S: 'small' },
						landscape: { default: true, S: false },
						image: { default: true },
						imageStick: { default: true}
					}
				]
			},
			//Column 1
			{
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				cards:
				[
					{ type: 'content',
						size: { default: 'tiny', S: 'small' },
						landscape: { default: true, S: false },
						image: { default: true },
						imageStick: { default: true}
					}
				]
			},
			//Column 2
			{
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				cards:
				[
					{ type: 'content',
						size: { default: 'tiny', S: 'small' },
						landscape: { default: true, S: false },
						image: { default: true },
						imageStick: { default: true}
					}
				]
			},
			//Column 3
			{
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				cards:
				[
					{ type: 'content',
						size: { default: 'tiny', S: 'small' },
						landscape: { default: true, S: false },
						image: { default: true },
						imageStick: { default: true}
					}
				]
			},
			//Column 4
			{
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				cards:
				[
					{ type: 'content',
						size: { default: 'tiny', S: 'small' },
						landscape: { default: true, S: false },
						image: { default: true },
						imageStick: { default: true}
					}
				]
			},
			//Column 5
			{
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				cards:
				[
					{ type: 'content',
						size: { default: 'tiny', S: 'small' },
						landscape: { default: true, S: false },
						image: { default: true },
						imageStick: { default: true}
					}
				]
			},
		],
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
		title: 'Most Read',
		style: 'most-popular',
		getContent: (content) => ({
			body: content.popularArticles
		}),
		dynamicContent: {
			id: 'most-popular-by-industry',
			description: 'Most read by professionals in',
			query: (uuid) => (mostPopular('industry', uuid)),
			parseResults: (data) => data.popularFromHui,
			rememberSource: true,
			sources: [
				{ uuid: 'initial',
					title: 'All sectors'
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
					"uuid": "http://api.ft.com/things/a53abf79-982e-3fa3-b46b-3dd5db56bb8d",
					"title": "Transport/logistics"
				},
				{
					"uuid": "http://api.ft.com/things/bed86acc-ab31-3952-b9a7-c990ea4acc65",
					"title": "Travel & leisure"
				}
			]
		},
		layout: [
			{
				colspan: { default: 12, M: 3},
				cards: [
					{ type: 'content',
						size: { default: 'medium' },
						standFirst: { default: true },
						image: { default: true }
					}
				],
			},
			{
				colspan: { default: 12, M: 3},
				cards: [
					{ type: 'content',
						size: { default: 'small' },
					},
					{ type: 'content',
						size: { default: 'small' },
						image: { default: true },
						landscape: { default: true, M: false }
					}
				]
			},
			{
				colspan: { default: 12, M: 3},
				cards: [
					{ type: 'content',
						size: { default: 'small' },
						image: { default: true },
						landscape: { default: true, M: false }
					},
					{
						type: 'content',
						size: { default: 'small' },
					}
				]
			},
			{
				colspan: { default: 12, M: 3},
				cards: [
					{
						type: 'content',
						size: { default: 'tiny' },
					},
					{
						type: 'content',
						size: { default: 'tiny' },
					},
					{
						type: 'content',
						size: { default: 'tiny' },
					},
					{
						type: 'content',
						size: { default: 'tiny' }
					}
				]
			}
		],
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
		layout: [
			{
				colspan: { default: 12 },
				cards: [
					{
						type: 'content',
						size: { default: 'small' },
						image: { default: true },
						landscape: { default: true, M: false, L: true }
					},
					{
						type: 'content',
						size: { default: 'small' }
					}
				]
			}
		],
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
		layout: [
			{
				colspan: { default: 12 },
				cards: [
					{
						type: 'content',
						size: { default: 'small' },
						image: { default: true },
						landscape: { default: true, M: false, L: true }
					},
					{
						type: 'content',
						size: { default: 'small' }
					}
				]
			}
		],
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
		layout: [
			{
				colspan: { default: 12 },
				cards: [
					{
						type: 'content',
						size: { default: 'small' },
						image: { default: true },
						landscape: { default: true, M: false, L: true }
					},
					{
						type: 'content',
						size: { default: 'small' }
					}
				]
			}
		],
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
		id: 'videos', // Note: calling this "video" breaks BB10
		trackable: 'video',
		title: 'Video',
		style: 'video',
		getContent: (content) => ({
			body: content.videos.map(video => Object.assign({}, { type: 'video' }, video))
		}),
		layout: [
			{
				colspan: { default: 12, S: 6, M: 3 },
				cards: [
					{
						//TODO: this isn't really content
						type: 'content'
					}
				]
			},
			{
				colspan: { default: 12, S: 6, M: 3 },
				cards: [
					{
						//TODO: this isn't really content
						type: 'content'
					}
				]
			},
			{
				colspan: { default: 12, S: 6, M: 3 },
				cards: [
					{
						//TODO: this isn't really content
						type: 'content'
					}
				]
			},
			{
				colspan: { default: 12, S: 6, M: 3 },
				cards: [
					{
						//TODO: this isn't really content
						type: 'content'
					}
				]
			}
		],
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
