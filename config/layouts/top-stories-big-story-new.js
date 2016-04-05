import { Row, Column, Content } from '@financial-times/n-section';

import FastFt from '../../shared/components/fast-ft/fast-ft-new';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				isRelated: true,
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
										isMain: true,
										image: {
											position: { default: 'top', M: 'right' },
											sizes: { default: 449, s: 659, m: 450, l: 423, xl: 517 }
										}
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
										size: 'medium',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium',
										hideTag: true
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
						count: 6
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
				colspan: { default: 6, L: 3 },
				components: [
					{
						type: Content,
						size: 'medium',
						image: {
							position: { default: 'top', S: 'right', L: 'top' },
							sizes: { default: 210, s: 126, m: 173, l: 259, xl: 322 }
						}
					}
				]
			},
			{
				type: Column,
				colspan: { default: 6, L: 3 },
				components: [
					{
						type: Content,
						size: 'medium',
						image: {
							position: { default: 'top', S: 'right', L: 'top' },
							sizes: { default: 210, s: 126, m: 173, l: 259, xl: 322 }
						}
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, L: 6 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true
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
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: Content,
										size: 'medium',
										image: {
											position: { default: 'right' },
											sizes: { default: 180, s: 126, m: 173, l: 111, xl: 129 }
										}
									}
								]
							}
						]
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
						image: {
							position: { default: 'right' },
							sizes: { default: 180, s: 264, m: 80, l: 111, xl: 129 }
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
						size: 'small'
					}
				]
			}
		]
	}
];
