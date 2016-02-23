import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: {default: 3},
				components: [
					{
						type: Content,
						size: 'medium'
					}
				]
			},
			{
				type: Column,
				colspan: {default: 3},
				components: [
					{
						type: Content,
						size: 'medium'
					}
				]
			},
			{
				type: Column,
				colspan: {default: 2},
				components: [
					{
						type: Content,
						size: 'medium'
					}
				]
			},
			{
				type: Column,
				colspan: {default: 2},
				components: [
					{
						type: Content,
						size: 'medium'
					}
				]
			},
			{
				type: Column,
				colspan: {default: 2},
				components: [
					{
						type: Content,
						size: 'medium'
					}
				]
			}
		]
	}
];
