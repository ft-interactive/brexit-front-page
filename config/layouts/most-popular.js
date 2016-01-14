import Content from '../../components/card/content';

export default [
	{
		colspan: { default: 12, M: 3},
		cards: [
			{ type: Content,
				size: { default: 'medium', L: 'large' },
				standFirst: { default: true },
				image: { default: true }
			}
		],
	},
	{
		colspan: { default: 12, M: 3},
		cards: [
			{ type: Content,
				size: { default: 'medium' },
			},
			{ type: Content,
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false }
			}
		]
	},
	{
		colspan: { default: 12, M: 3},
		cards: [
			{ type: Content,
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false }
			},
			{
				type: Content,
				size: { default: 'small' },
			}
		]
	},
	{
		colspan: { default: 12, M: 3},
		cards: [
			{
				type: Content,
				size: { default: 'tiny' },
			},
			{
				type: Content,
				size: { default: 'tiny' },
			},
			{
				type: Content,
				size: { default: 'tiny' },
			},
			{
				type: Content,
				size: { default: 'tiny' }
			}
		]
	}
];
