export default [
	{
		colspan: { default: 12, M: 4, XL:3},
		cards: [
			{ type: 'content',
				size: { default: 'medium', XL: 'large' },
				standFirst: { default: true },
				image: { default: true },
				itemIndex: 0
			},
			{
			 type: 'content',
				size: { default: 'medium' },
				itemIndex: 1,
				show: { default: true, XL: false }
			}
		]
	},
	{
		colspan: { default: 12, M: 4, XL: 3},
		cards: [
			{ type: 'content',
				size: { default: 'medium' },
				itemIndex: 1,
				show: { default: false, XL: true }
			},
			{ type: 'content',
				size: { default: 'small' },
				show: { default: true, XL: false },
				itemIndex: 2
			},
			{ type: 'content',
				size: { default: 'small' },
				show: { default: true, M: true, XL: false },
				image: { default: true },
				landscape: { default: true, XL: false },
				itemIndex: 3
			},
			{ type: 'content',
				size: { default: 'small' },
				show: { default: true, L: false },
				itemIndex: 4
			},
			{ type: 'ad',
				adClasses: 'ad-placeholder--most-popular',
				show: { default: false, L: true }
			}
		]
	},
	{
		colspan: { default: 12, M: 4, XL: 3},
		cards: [
			{ type: 'content',
				size: { default: 'small' },
				show: { default: false, XL: true },
				itemIndex: 2
			},
			{ type: 'content',
				size: { default: 'small' },
				itemIndex: 3,
				show: { default: false, XL: true}
			},
			{
				type: 'content',
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, XL: false },
				show: { default: false, L: true},
				itemIndex: 4
			},
			{ type: 'content',
				size: { default: 'small' },
				image: { default: false },
				landscape: { default: true },

				show: { default: true, XL: false},
				itemIndex: 5
			},
			{
				type: 'content',
				size: { default: 'small' },
				itemIndex: 6,
				show: { default: true, XL: false}
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				show: { default: false, M: true, XL: false},
				itemIndex: 7
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				show: { default: false, M: true, XL: false},
				itemIndex: 8
			}
		]
	},
	{
		colspan: { default: 12, M: 'hide', L: 'hide', XL: 3},
		cards: [
			{
				type: 'content',
				size: { default: 'tiny' },
				show: { default: false, XL: true},
				itemIndex: 5
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				show: { default: false, XL: true},
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
