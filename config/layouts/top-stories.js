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
				colspan: { default: 12, M: 5 },
				components:
				[
					{
						type: Content,
						size: 'large-top-story',
						related: { default: 1, M: 3},
						showStandfirst: true,
						image: {
							srcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
						}
					},
					{
						type: Content,
						size: 'medium',
						landscape: { default: 'true' }
					}
				]
			},
			//Column 1
			{
				type: Column,
				colspan: { default: 12, M: 4 },
				components: [
					{
						type: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{
						type: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{
						type: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{
						type: Content,
						size: 'small',
						landscape: { default: 'true' }
					},
					{
						type: Content,
						size: 'small',
						landscape: { default: 'true' }
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
						size: 'tiny',
						landscape: { default: 'true' }
					},
					{
						type: Content,
						size: 'tiny',
						landscape: { default: 'true' }
					},
					{
						type: Content,
						size: 'tiny',
						landscape: { default: 'true', M: false },
						image: {
							srcSet: { default: 100, s: 100, m: 199, l: 161, xl: 233 }
						}
					},
					{
						type: Content,
						size: 'tiny',
						landscape: { default: 'true' }
					}
				]
			}
		]
	}
];
