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
				colspan: { default: 12, M: 6, XL: 5 },
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
				colspan: { default: 12, M: 6, XL: 5 },
				components: [
					{ type: Card,
						cardType: Content,
						size: 'medium'
					},
					{ type: Card,
						cardType: Content,
						size: 'medium'
					},
					{ type: Card,
						cardType: Content,
						size: 'medium',
						image: { default: true },
						imageSrcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 },
						landscape: { default: true },
						imgYCentre: true
					},
					{ type: Card,
						cardType: Content,
						size: 'medium'
					}
				]
			},
			//Column 2
			{
				type: Column,
				className: 'condensed-list',
				colspan: { default: 12, XL: 2 },
				components:
				[
					{
						type: Row,
						isCompact: true,
						components:
						[
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Card,
										cardType: Content,
										size: 'small',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Card,
										cardType: Content,
										size: 'small',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Card,
										cardType: Content,
										size: 'small',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Card,
										cardType: Content,
										size: 'small',
										hideTag: true
									}
								]
							}
						]
					}
				]
			}
		]
	}
];
