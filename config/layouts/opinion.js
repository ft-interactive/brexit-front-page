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
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true,
						image: {
							srcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
						}
					}
				]
			},
			//Column 1
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
							position: { default: 'left', M: 'top' },
							srcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
						}
					}

				]
			},
			//Column 2
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components: [
				{
						type: Content,
						size: 'small',
						image: {
							position: { default: 'left', M: 'top' },
							srcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
						}
					},
					{
						type: Content,
						size: 'small'
					}
				]
			},
			//Column 3
			{
				type: Column,
				colspan: { default: 12, M: 3 },
				components:
				[
					{
						type: Content,
						size: 'tiny'
					},
					{
						type: Content,
						size: 'tiny',
						image: {
							position: { default: 'left', M: 'top' },
							srcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
						}

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
