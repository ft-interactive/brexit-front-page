import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';
import Ad from '../../shared/components/ad/ad';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 3, L: 4, XXL: 3 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true,
						itemIndex: 0,
						image: {
							srcSet: { default: 449, s: 659, m: 199, l: 357, xl: 430 }
						}
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
				type: Column,
				colspan: { default: 12, M: 3, L: 4 },
				components: [
					{
						type: Content,
						size: 'medium',
						itemIndex: 1,
						show: { default: false, M: true, L: false, XL: true },
						image: {
							show: { default: true, L: false },
							position: { default: 'left', M: 'bottom' },
							srcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
						}
					},
					{
						type: Content,
						size: 'medium',
						show: { default: true, XL: false },
						itemIndex: 2
					},
					{
						type: Content,
						size: 'medium',
						show: { default: true, M: false, L: true, XL: false },
						itemIndex: 3
					},
					{
						type: Content,
						size: 'medium',
						show: { default: true, M: false },
						itemIndex: 4
					},
					{
						type: Ad,
						adClasses: 'ad-placeholder--most-popular',
						show: { default: false, L: true }
					}
				]
			},
			{
				className: 'most-popular__column-after-ad',
				type: Column,
				colspan: { default: 12, M: 3, L: 4, XL: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						show: { default: false, XL: true },
						itemIndex: 2
					},
					{
						type: Content,
						size: 'small',
						itemIndex: 3,
						show: { default: false, M: true, L: false, XL: true }
					},
					{
						type: Content,
						size: 'small',
						image: {
							srcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 },
							position: {default: 'left', M: 'bottom', L: 'left', XL: 'bottom' }
						},
						show: { default: false, M: true },
						itemIndex: 4
					},
					{
						type: Content,
						size: 'small',
						show: { default: true, M: false, L: true, XL: false },
						itemIndex: 5
					},
					{
						type: Content,
						size: 'small',
						itemIndex: 6,
						show: { default: true, M: false, L: true, XL: false }
					},
					{
						type: Content,
						size: 'small',
						show: { default: false, L: true, XL: false },
						itemIndex: 7
					},
					{
						type: Content,
						size: 'small',
						show: { default: false, L: true, XL: false },
						itemIndex: 8
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3, L: 'hide', XL: 2, XXL: 3 },
				components: [
					{
						type: Content,
						size: 'tiny',
						show: { default: false, M: true, L: false, XL: true },
						itemIndex: 5
					},
					{
						type: Content,
						size: 'tiny',
						show: { default: false, M: true, L: false, XL: true },
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
		]
	}
];
