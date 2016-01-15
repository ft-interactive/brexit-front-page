import Content from '../../components/card/content';
import Ad from '../../components/card/ad';

export default [
	{
		colspan: { default: 12, M: 3, L: 4, XXL: 3},
		cards: [
			{ type: Content,
				size: { default: 'medium', L: 'large' },
				standFirst: { default: true },
				image: { default: true },
				itemIndex: 0
			},
			{
			 	type: Content,
				size: { default: 'medium' },
				itemIndex: 1,
				show: { default: true, M: false, L: true, XL: false }
			}
		]
	},
	{
		className: 'most-popular__column-with-ad',
		colspan: { default: 12, M: 3, L: 4 },
		cards: [
			{ type: Content,
				size: { default: 'medium' },
				itemIndex: 1,
				show: { default: false, M: true, L: false, XL: true },
				image: { default: true, L: false},
				landscape: { default: true, M: false, L: false }
			},
			{ type: Content,
				size: { default: 'small' },
				show: { default: true, XL: false },
				itemIndex: 2
			},
			{ type: Content,
				size: { default: 'small' },
				show: { default: true, M: false, L: true, XL: false },
				itemIndex: 3
			},
			{ type: Content,
				size: { default: 'small' },
				show: { default: true, M: false },
				itemIndex: 4
			},
			{ type: Ad,
				adClasses: 'ad-placeholder--most-popular',
				show: { default: false, L: true }
			}
		]
	},
	{
		className: 'most-popular__column-after-ad',
		colspan: { default: 12, M: 3, L: 4, XL: 2},
		cards: [
			{ type: Content,
				size: { default: 'small' },
				show: { default: false, XL: true },
				itemIndex: 2
			},
			{ type: Content,
				size: { default: 'small' },
				itemIndex: 3,
				show: { default: false, M: true, L: false, XL: true}
			},
			{
				type: Content,
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false, L: true, XL: false },
				show: { default: false, M: true},
				itemIndex: 4
			},
			{ type: Content,
				size: { default: 'small' },
				image: { default: false },
				show: { default: true, M: false, L: true, XL: false},
				itemIndex: 5
			},
			{
				type: Content,
				size: { default: 'small' },
				itemIndex: 6,
				show: { default: true, M: false, L: true, XL: false}
			},
			{
				type: Content,
				size: { default: 'small' },
				show: { default: false, L: true, XL: false},
				itemIndex: 7
			},
			{
				type: Content,
				size: { default: 'small' },
				show: { default: false, L: true, XL: false},
				itemIndex: 8
			}
		]
	},
	{
		colspan: { default: 12, M: 3, L: 'hide', XL: 2, XXL: 3},
		cards: [
			{
				type: Content,
				size: { default: 'tiny' },
				show: { default: false, M: true, L: false, XL: true},
				itemIndex: 5
			},
			{
				type: Content,
				size: { default: 'tiny' },
				show: { default: false, M: true, L: false, XL: true},
				itemIndex: 6
			},
			{
				type: Content,
				size: { default: 'tiny' },
				itemIndex: 7
			},
			{
				type: Content,
				size: { default: 'tiny' },
				itemIndex: 8
			}
		]
	}
];
