import Content from '../../components/card/content';
import Ad from '../../components/card/ad';

export default [
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: Content,
				size: { default: 'medium' },
				standFirst: { default: true },
				image: { default: true },
				itemIndex: 0
			},
			{ type: Content,
				size: { default: 'small' },
				itemIndex: 1
			}
		]
	},
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: Content,
				size: { default: 'small' },
				itemIndex: 2
			},
			{ type: Ad,
				show: { default: false, L: true }
			},
			{ type: Content,
				size: { default: 'small' },
				show: { default: true, L: false },
				itemIndex: 3
			},
			{ type: Content,
				size: { default: 'small' },
				show: { default: true, L: false },
				itemIndex: 4
			}
		]
	},
	{
		colspan: { default: 12, M: 4},
		cards: [
			{ type: Content,
				size: { default: 'small' },
				image: { default: false },
				landscape: { default: true, M: false },
				itemIndex: 3,
				show: { default: false, L: true}
			},
			{
				type: Content,
				size: { default: 'small' },
				itemIndex: 4
			},
			{ type: Content,
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false },
				itemIndex: 5
			},
			{
				type: Content,
				size: { default: 'small' },
				itemIndex: 6,
				show: { default: true, L: false}
			},
			{
				type: Content,
				size: { default: 'tiny' },
				itemIndex: 7,
				show: { default: true, L: false}
			}
		]
	}
];
