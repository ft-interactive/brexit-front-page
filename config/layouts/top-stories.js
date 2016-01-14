import Content from '../../components/card/content';

export default [
	//Column 0
	{
		type: 'column',
		colspan: { default: 12, M: 5 },
		cards:
		[
			{ type: Content,
				size: { default: 'large' },
				related: { default: 1, M: 3},
				standFirst: { default: true },
				image: { default: true }
			},
			{ type: Content,
				size: { default: 'medium' },
				landscape: { default: 'true' },
			}
		]
	},
	//Column 1
	{
		colspan: { default: 12, M: 4 },
		cards: [
			{ type: Content,
				size: { default: 'small' },
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: { default: 'small' },
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: { default: 'small' },
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: { default: 'small' },
				landscape: { default: 'true' }
			},
			{ type: Content,
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
				type: Content,
				size: { default : 'tiny' },
				landscape: { default: 'true' }
			},
			{
				type: Content,
				size: { default : 'tiny' },
				landscape: { default: 'true' }
			},
			{
				type: Content,
				size: { default : 'tiny' },
				landscape: { default: 'true', M: false },
				image: { default: 'true' }
			},
			{
				type: Content,
				size: { default : 'tiny' },
				landscape: { default: 'true' }
			}
		],
	}
];
