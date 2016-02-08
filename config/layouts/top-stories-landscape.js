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
				colspan: { default: 12 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true,
						image: {
							sizes: { default: 449, s: 659, m: 432, l: 357, xl: 411 },
							position: { default: 'right' }
						}
					}
				]
			}
		]
	},
	{
		type: Row,
		components: [
			//Column 0
			{
				type: Column,
				colspan: { default: 12, M: 6 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true,
						image: {
							sizes: { default: 449, s: 659, m: 432, l: 357, xl: 411 },
							position: { default: 'top' }
						}
					}
				]
			},
			//Column 1
			{
				type: Column,
				colspan: { default: 12, M: 6 },
				components: [
					{
						type: Content,
						size: 'medium'
					},
					{
						type: Content,
						size: 'medium',
						image: {
							sizes: { default: 100 },
							position: { default: 'left' }
						}
					}
				]
			}
		]
	}
];
