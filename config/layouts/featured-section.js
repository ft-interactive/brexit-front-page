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
						size: 'small',
						image: {
							position: { default: 'left', M: 'bottom', L: 'left' },
							srcSet: { default: 100, m: 277, l: 100 }
						}
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
