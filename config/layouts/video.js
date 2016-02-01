import Row from '../../components/row/row';
import Column from '../../components/column/column';
import Content from '../../components/card/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content
					}
				]
			}
		]
	}
];
