import Row from '../../components/row/row';
import Column from '../../components/column/column';
import Content from '../../components/card/content';

export default [
	{
		type: Row,
		components: [
			//Column 0
			{
				type: Column,
				colspan: { default: 12, M: 6, XL: 5 },
				components: [
					{
						type: Content,
						size: 'large-top-story',
						showRelated: true,
						showStandfirst: true,
						image: {
							srcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
						}
					}
				]
			},
			//Column 1
			{
				type: Column,
				colspan: { default: 12, M: 6, XL: 5 },
				components: [
					{
						type: Content,
						size: 'medium'
					},
					{
						type: Content,
						size: 'medium'
					},
					{
						type: Content,
						size: 'medium',
						image: {
							srcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 },
							position: 'left',
							yCentre: true
						}
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
										type: Content,
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
										type: Content,
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
										type: Content,
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
										type: Content,
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
