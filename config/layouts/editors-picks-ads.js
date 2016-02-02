import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
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
							srcSet: { default: 100, s: 315, m: 199, l: 161, xl: 233 }
						}
					}
				]
			},
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
							srcSet: { default: 100, s: 315, m: 199, l: 161, xl: 233 }
						}

					}
				]
			},
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
							srcSet: { default: 100, s: 315, m: 199, l: 161, xl: 227, xxl: 233 }
						}
					}
				]
			},
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
							srcSet: { default: 100, s: 315, m: 199, l: 161, xl: 233 }
						}
					}
				]
			}
		]
	}
	//Column 0

];
