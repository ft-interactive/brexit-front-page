import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandFirst: true,
						image: {
							sizes: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
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
						size: 'medium'
					},
					{
						type: Content,
						size: 'small',
						image: {
							position: { default: 'left', M: 'bottom' },
							sizes: { default: 100, m: 199, l: 259, xl: 322 }
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
						size: 'small',
						image: {
							position: { default: 'left', M: 'bottom' },
							sizes: { default: 100, m: 199, l: 259, xl: 322 }
						}
					},
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
						size: 'tiny'
					},
					{
						type: Content,
						size: 'tiny'
					},
					{
						type: Content,
						size: 'tiny'
					},
					{
						type: Content,
						size: 'tiny'
					}
				]
			}
		]
	}
];
