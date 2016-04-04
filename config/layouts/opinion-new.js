import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, M: 4, L: 3 },
				components: [
					{
						type: Content,
						size: 'large',
						showStandfirst: true,
						image: {
							sizes: { default: 449, s: 659, m: 277, l: 259, xl: 322 }
						}
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 4, L: 3 },
				components: [
					{
						type: Content,
						size: 'medium',
						showStandfirst: true
					},
					{
						type: Content,
						size: 'medium',
						showStandfirst: true
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 4, L: 3 },
				components: [
					{
						type: Content,
						size: 'medium',
						showStandfirst: true
					},
					{
						type: Content,
						size: 'medium',
						showStandfirst: true
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, M: 12, L: 3 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, M: 4, L: 12 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4, L: 12 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4, L: 12 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							}
						]
					}
				]
			}
		]
	}
];
