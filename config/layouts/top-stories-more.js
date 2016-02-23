import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 6 },
				components: [
					{
						type: Content,
						size: 'medium',
						showStandfirst: true,
						image: {
							position: { default: 'right' },
							sizes: { default: 225, s: 315, m: 216, l: 276, xl: 339 }
						}
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'medium',
						showStandfirst: true
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'medium',
						showStandfirst: true
					}
				]
			}
		]
	}
];
