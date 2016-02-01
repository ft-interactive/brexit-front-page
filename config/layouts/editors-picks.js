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
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'top' },
							srcSet: { default: 100, s: 315, m: 277, l: 161, xl: 203 }
						}
					}
				]
			},
			//Column 1
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'top' },
							srcSet: { default: 100, s: 315, m: 277, l: 161, xl: 203 }
						}
					}
				]
			},
			//Column 2
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'top' },
							srcSet: { default: 100, s: 315, m: 277, l: 161, xl: 203 }
						}
					}
				]
			},
			//Column 3
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'top' },
							srcSet: { default: 100, s: 315, m: 277, l: 161, xl: 203 }
						}
					}
				]
			},
			//Column 4
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'top' },
							srcSet: { default: 100, s: 315, m: 277, l: 161, xl: 203 }
						}
					}
				]
			},
			//Column 5
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 4, L: 2 },
				components: [
					{
						type: Content,
						size: 'small',
						image: {
							stick: true,
							position: { default: 'left', S: 'top' },
							srcSet: { default: 100, s: 315, m: 277, l: 161, xl: 203 }
						}
					}
				]
			}
		]
	}
];
