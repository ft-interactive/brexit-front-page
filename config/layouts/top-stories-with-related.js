import Content from '../../components/card/content';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Card from '../../components/card/card';


export default [
	{
		type: Row,
		components: [
			//Column 0
			{
				type: Column,
				colspan: { default: 12, M: 5 },
				components:
				[
					{ type: Card,
						cardType: Content,
						size: 'large-top-story',
						related: { default: 1, M: 3},
						standFirst: { default: true },
						image: { default: true },
						imageSrcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
					}
				]
			},
			//Column 1
			{
				type: Column,
				colspan: { default: 12, M: 4 },
				components: [
					{ type: Card,
						cardType: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{ type: Card,
						cardType: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{ type: Card,
						cardType: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{ type: Card,
						cardType: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{ type: Card,
						cardType: Content,
						size: 'small',
						landscape: { default: 'true' }
					}
				],
			},
			//Column 2
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						landscape: { default: 'true' }
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						landscape: { default: 'true' }
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						landscape: { default: 'true', M: false },
						image: { default: 'true' },
						imageSrcSet: { default: 100, s: 100, m: 199, l: 161, xl: 233 }
					},
					{
						type: Card,
						cardType: Content,
						size: 'tiny',
						landscape: { default: 'true' }
					}
				],
			}

		]
	}
];
