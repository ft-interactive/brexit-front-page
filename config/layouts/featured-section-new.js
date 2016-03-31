import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 6 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true,
						image: {
							sizes: { default: 210, s: 315, m: 199, l: 259, xl: 322 }
						}
					}
				]
			},
			{
				type: Column,
				colspan: { default: 6 },
				components: [
					{
						type: Content,
						size: 'small',
						showStandfirst: true
					},
					{
						type: Content,
						size: 'small'
					},
					{
						type: Content,
						size: 'small'
					}
				]
			}
		]
	}
];
