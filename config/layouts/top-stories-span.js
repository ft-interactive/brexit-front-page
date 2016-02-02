import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true,
						image: {
							position: { default: 'right' },
							srcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
						}
					}
				]
			}
		]
	},
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 5 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 5 },
				components: [
					{
						type: Content,
						size: 'medium'
					},
					{
						type: Content,
						size: 'medium',
						image: {
							position: { default: 'left' },
							srcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
						}
					}
				]
			}
		]
	}
];
