import Row from '../../components/row/row';
import Column from '../../components/column/column';
import Content from '../../components/card/content';

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
							position: { default: 'left', M: 'top', L: 'left' },
							srcSet: { default: 100, s: 100, m: 277, l: 100, xl: 100 }
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
