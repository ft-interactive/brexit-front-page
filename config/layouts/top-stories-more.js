import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 3, XL: 'hide' },
				components: [
					{
						type: Content,
						size: 'small',
						show: { default: true, XL: false }
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3, XL: 'hide' },
				components: [
					{
						type: Content,
						size: 'small',
						show: { default: true, XL: false }
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'small'
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'small',
						show: { default: false, XL: true }
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'small',
						show: { default: false, XL: true }
					}
				]
			}
		]
	}
];
