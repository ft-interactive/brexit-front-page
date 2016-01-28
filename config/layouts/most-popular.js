import Content from '../../components/card/content';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Card from '../../components/card/card';


export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 3},
				components: [
					{ type: Card,
						cardType: Content,
						size: 'large',
						standFirst: { default: true },
						image: { default: true },
						imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
					}
				],
			},
			{
				type: Column,
				colspan: { default: 12, M: 3},
				components: [
					{ type: Card,
						cardType: Content,
						size: 'medium',
					},
					{ type: Card,
						cardType: Content,
						size: 'small',
						image: { default: true },
						landscape: { default: true, M: false },
						imageSrcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3},
				components: [
					{ type: Card,
						cardType: Content,
						size: 'small',
						image: { default: true },
						landscape: { default: true, M: false },
						imageSrcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
					},
					{
						type: Card,
						cardType: Content,
						size: 'small',
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3},
				components: [
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny'
					}
				]
			}
		]
	}
];
