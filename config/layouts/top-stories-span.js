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
				colspan: { default: 12 },
				components: [
					{
						type: Content,
						size: 'wide',
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
			//Column 0
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
						size: 'medium'
					},
					{
						type: Content,
						size: 'medium',
						image: {
							position: { default: 'right' },
							srcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
						}
					}
				]
			},
			//Column 1
			{
				type: Column,
				className: 'condensed-list',
				colspan: { default: 12, M: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						hideTag: true
					},
					{
						type: Content,
						size: 'small',
						hideTag: true
					},
					{
						type: Content,
						size: 'small',
						hideTag: true
					},
					{
						type: Content,
						size: 'small',
						hideTag: true
					}
				]
			}
		]
	}
];
