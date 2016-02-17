import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			//Column 0
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'bottom' },
							sizes: { default: 100, s: 315, l: 259, xl: 322 }
						}
					}
				]
			},
			//Column 1
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'bottom' },
							sizes: { default: 100, s: 315, l: 259, xl: 322 }
						}
					}
				]
			},
			//Column 2
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'bottom' },
							sizes: { default: 100, s: 315, l: 259, xl: 322 }
						}
					}
				]
			},
			//Column 3
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'bottom' },
							sizes: { default: 100, s: 315, l: 259, xl: 322 }
						}
					}
				]
			}
		]
	}
];
