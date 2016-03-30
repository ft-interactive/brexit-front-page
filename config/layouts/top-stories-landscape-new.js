import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';
import FastFt from '../../shared/components/fast-ft/fast-ft-new';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, L: 9 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12 },
								components: [
									{
										type: Content,
										size: 'large-top-story',
										showStandfirst: true,
										related: {
											show: true,
											colspan: { default: 12 }
										},
										image: {
											position: { default: 'right' },
											sizes: { default: 180, s: 264, m: 360, l: 339, xl: 414 }
										}
									}
								]
							}
						]
					}
				]
			},
			{
				type: Column,
				colspan: { default: 'hide', S: 'hide', M: 'hide', L: 3 },
				components: [
					{
						type: FastFt,
						size: 'medium',
						count: 4
					}
				]
			}
		]
	},
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, L: 3},
				components: [
					{
						type: Content,
						size: 'medium',
						showStandfirst: true,
						image: {
							position: { default: 'bottom', S: 'left', L: 'bottom' },
							sizes: { default: 449, s: 264, m: 360, l: 259, xl: 322 }
						}
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, L: 9 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							}
						]
					},
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							}
						]
					},
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'small'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
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
