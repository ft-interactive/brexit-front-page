import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

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
					{
						type: Content,
						size: 'large-top-story',
						showStandfirst: true,
						showRelated: true,
						image: {
							srcSet: { default: 449, s: 659, m: 432, l: 357, xl: 411 }
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
						size: 'medium',
						showStandfirst: true,
						image: {
							srcSet: { default: 100 },
							position: { default: 'left' }
						}
					},
					{
						type: Content,
						size: 'medium',
						showStandfirst: true
					},
					{
						type: Content,
						size: 'medium'
					}
				]
			},
			//Column 2
			{
				type: Column,
				className: 'condensed-list',
				colspan: { default: 12, XL: 2 },
				components: [
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
										size: 'tiny',
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
										size: 'tiny',
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
										size: 'tiny',
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
										size: 'tiny',
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
