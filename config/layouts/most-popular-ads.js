import Content from '../../components/card/content';
import Ad from '../../components/card/ad';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Card from '../../components/card/card';


export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 3, L: 4, XXL: 3},
				components: [
					{ type: Card,
						cardType: Content,
						size: 'large',
						standFirst: { default: true },
						image: { default: true },
						itemIndex: 0,
						imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
					},
					{
					 	type: Card,
					 	cardType: Content,
						size: 'medium',
						itemIndex: 1,
						show: { default: true, M: false, L: true, XL: false }
					}
				]
			},
			{
				className: 'most-popular__column-with-ad',
				type: Column,
				colspan: { default: 12, M: 3, L: 4 },
				components: [
					{ type: Card,
						cardType: Content,
						size: 'medium',
						itemIndex: 1,
						show: { default: false, M: true, L: false, XL: true },
						image: { default: true, L: false },
						landscape: { default: true, M: false, L: false },
						imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
					},
					{ type: Card,
						cardType: Content,
						size: 'medium',
						show: { default: true, XL: false },
						itemIndex: 2
					},
					{ type: Card,
						cardType: Content,
						size: 'medium',
						show: { default: true, M: false, L: true, XL: false },
						itemIndex: 3
					},
					{ type: Card,
						cardType: Content,
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
				type: Column,
				colspan: { default: 12, M: 3, L: 4, XL: 2},
				components: [
					{ type: Card,
						cardType: Content,
						size: 'small',
						show: { default: false, XL: true },
						itemIndex: 2
					},
					{ type: Card,
						cardType: Content,
						size: 'small',
						itemIndex: 3,
						show: { default: false, M: true, L: false, XL: true}
					},
					{
						type: Card,
						cardType: Content,
						size: 'small',
						image: { default: true },
						imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 },
						landscape: { default: true, M: false, L: true, XL: false },
						show: { default: false, M: true},
						itemIndex: 4
					},
					{ type: Card,
						cardType: Content,
						size: 'small',
						show: { default: true, M: false, L: true, XL: false},
						itemIndex: 5
					},
					{
						type: Card,
						cardType: Content,
						size: 'small',
						itemIndex: 6,
						show: { default: true, M: false, L: true, XL: false}
					},
					{
						type: Card,
						cardType: Content,
						size: 'small',
						show: { default: false, L: true, XL: false},
						itemIndex: 7
					},
					{
						type: Card,
						cardType: Content,
						size: 'small',
						show: { default: false, L: true, XL: false},
						itemIndex: 8
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3, L: 'hide', XL: 2, XXL: 3},
				components: [
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						show: { default: false, M: true, L: false, XL: true},
						itemIndex: 5
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						show: { default: false, M: true, L: false, XL: true},
						itemIndex: 6
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						itemIndex: 7
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						itemIndex: 8
					}
				]
			}
		]
	}
];
