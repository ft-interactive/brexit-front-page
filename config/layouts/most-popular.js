export default [
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
];
