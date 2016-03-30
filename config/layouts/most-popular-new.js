import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			}
		]
	}
];
