import Content from '../../components/card/content';

export default [
	{
		colspan: { default: 12, M: 3},
		cards: [
			{ type: Content,
				size: 'large',
				standFirst: { default: true },
				image: { default: true }
			}
		],
	},
	{
		colspan: { default: 12, M: 3},
		cards: [
			{ type: Content,
				size: 'medium',
			},
			{ type: Content,
				size: 'small',
				image: { default: true },
				landscape: { default: true, M: false }
			}
		]
	},
	{
		colspan: { default: 12, M: 3},
		cards: [
			{ type: Content,
				size: 'small',
				image: { default: true },
				landscape: { default: true, M: false }
			},
			{
				type: Content,
				size: 'small',
			}
		]
	},
	{
		colspan: { default: 12, M: 3},
		cards: [
			{
				type: Content,
				size: 'tiny',
			},
			{
				type: Content,
				size: 'tiny',
			},
			{
				type: Content,
				size: 'tiny',
			},
			{
				type: Content,
				size: 'tiny'
			}
		]
	}
];
