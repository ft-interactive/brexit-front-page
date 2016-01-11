export default [
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: 'content',
				size: { default: 'medium' },
				standFirst: { default: true },
				image: { default: true },
				itemIndex: 0
			}
		]
	},
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: 'content',
				size: { default: 'small' },
				itemIndex: 1
			},
			{ type: 'ad',
				show: { default: false, L: true }
			},
			{ type: 'content',
				size: { default: 'small' },
				show: { default: true, L: false },
				itemIndex: 2
			},
			{ type: 'content',
				size: { default: 'small' },
				show: { default: true, L: false },
				itemIndex: 3
			}
		]
	},
	{
		colspan: { default: 12, M: 4, XL: 2},
		cards: [
			{ type: 'content',
				size: { default: 'small' },
				image: { default: false },
				landscape: { default: true, M: false },
				itemIndex: 2,
				show: { default: false, L: true}
			},
			{
				type: 'content',
				size: { default: 'small' },
				itemIndex: 3
			},
			{ type: 'content',
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false },
				itemIndex: 4
			},
			{
				type: 'content',
				size: { default: 'small' },
				itemIndex: 5,
				show: { default: true, L: false}
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				itemIndex: 6,
				show: { default: true, L: false}
			}
		]
	},
	{
		colspan: { default: 12, M: 'hide', L: 'hide', XL: 2},
		cards: [
			{
				type: 'content',
				size: { default: 'tiny' },
				itemIndex: 5
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				itemIndex: 6
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				itemIndex: 7
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				itemIndex: 8
			}
		]
	}
];
