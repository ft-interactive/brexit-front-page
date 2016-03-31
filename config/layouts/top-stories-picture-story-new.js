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
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: Content,
										size: 'large-no-image',
										showStandfirst: true,
										related: {
											show: { default: true, S: false, M: true },
											colspan: { default: 12 }
										}
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: Content,
										size: 'small',
										isPictureStory: true,
										hideTag: true,
										image: {
											position: { default: 'top' },
											sizes: { default: 449, s: 315, m: 432, l: 406, xl: 500 }
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
										size: 'medium'
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
			}
		]
	}
];
