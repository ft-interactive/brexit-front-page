import Content from '../../components/card/content';
import Ad from '../../components/card/ad';

export default [
	{
		colspan: { default: 12, M: 3, L: 4, XXL: 3},
		items: [
			{ type: Content,
				size: 'large',
				standFirst: { default: true },
				image: { default: true },
				itemIndex: 0,
				imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
			},
			{
			 	type: Content,
				size: 'medium',
				itemIndex: 1,
				show: { default: true, M: false, L: true, XL: false }
			}
		]
	},
	{
		className: 'most-popular__column-with-ad',
		colspan: { default: 12, M: 3, L: 4 },
		items: [
			{ type: Content,
				size: 'medium',
				itemIndex: 1,
				show: { default: false, M: true, L: false, XL: true },
				image: { default: true, L: false },
				landscape: { default: true, M: false, L: false },
				imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
			},
			{ type: Content,
				size: 'medium',
				show: { default: true, XL: false },
				itemIndex: 2
			},
			{ type: Content,
				size: 'medium',
				show: { default: true, M: false, L: true, XL: false },
				itemIndex: 3
			},
			{ type: Content,
				size: 'medium',
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
		items: [
			{ type: Content,
				size: 'small',
				show: { default: false, XL: true },
				itemIndex: 2
			},
			{ type: Content,
				size: 'small',
				itemIndex: 3,
				show: { default: false, M: true, L: false, XL: true}
			},
			{
				type: Content,
				size: 'small',
				image: { default: true },
				imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 },
				landscape: { default: true, M: false, L: true, XL: false },
				show: { default: false, M: true},
				itemIndex: 4
			},
			{ type: Content,
				size: 'small',
				show: { default: true, M: false, L: true, XL: false},
				itemIndex: 5
			},
			{
				type: Content,
				size: 'small',
				itemIndex: 6,
				show: { default: true, M: false, L: true, XL: false}
			},
			{
				type: Content,
				size: 'small',
				show: { default: false, L: true, XL: false},
				itemIndex: 7
			},
			{
				type: Content,
				size: 'small',
				show: { default: false, L: true, XL: false},
				itemIndex: 8
			}
		]
	},
	{
		colspan: { default: 12, M: 3, L: 'hide', XL: 2, XXL: 3},
		items: [
			{
				type: Content,
				size: 'tiny',
				show: { default: false, M: true, L: false, XL: true},
				itemIndex: 5
			},
			{
				type: Content,
				size: 'tiny',
				show: { default: false, M: true, L: false, XL: true},
				itemIndex: 6
			},
			{
				type: Content,
				size: 'tiny',
				itemIndex: 7
			},
			{
				type: Content,
				size: 'tiny',
				itemIndex: 8
			}
		]
	}
];
