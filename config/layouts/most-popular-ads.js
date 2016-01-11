export default [
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: 'content',
				size: { default: 'medium' },
				standFirst: { default: true },
				image: { default: true },
				itemIndex: 0
			},
			{ type: 'content',
				size: { default: 'small' },
				itemIndex: 1
			}
		]
	},
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: 'content',
				size: { default: 'small' },
				itemIndex: 2
			},
			{ type: 'ad',
				show: { default: false, L: true }
			},
			{ type: 'content',
				size: { default: 'small' },
				show: { default: true, L: false },
				itemIndex: 3
			},
			{ type: 'content',
				size: { default: 'small' },
				show: { default: true, L: false },
				itemIndex: 4
			}
		]
	},
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: 'content',
				size: { default: 'small' },
				image: { default: false },
				landscape: { default: true, M: false },
				itemIndex: 3,
				show: { default: false, L: true}
			},
			{
				type: 'content',
				size: { default: 'small' },
				itemIndex: 4
			},
			{ type: 'content',
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false },
				itemIndex: 5
			},
			{
				type: 'content',
				size: { default: 'small' },
				itemIndex: 6,
				show: { default: true, L: false}
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				itemIndex: 7,
				show: { default: true, L: false}
			}
		]
	}
];
