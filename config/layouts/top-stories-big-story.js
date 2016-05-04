import createImageConfig from '../../shared/libs/create-image-config';

export default () => [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				isRelated: true,
				colspan: { default: 12, L: 9 },
				components: [
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12 },
								components: [
									{
										type: 'Content',
										size: 'large-top-story',
										standfirst: {
											show: { default: true }
										},
										isMain: true,
										image: createImageConfig({ default: 12, L: 9 }, { default: 'top', M: 'right' }, [300, 450, 517, 659])
									}
								]
							}
						]
					},
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										hideTag: true
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										hideTag: true
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: 'Content',
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
				type: 'Column',
				colspan: { default: 'hide', S: 'hide', M: 'hide', L: 3 },
				components: [
					{
						type: 'FastFt',
						count: {
							default: 4, XL: 5, XXL: 6
						}
					}
				]
			}
		]
	},
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 6, L: 3 },
				components: [
					{
						type: 'Content',
						size: 'medium',
						image: createImageConfig({ default: 6, L: 3 }, { default: 'top', S: 'right', L: 'top' }, [150, 216, 322])
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 6, L: 3 },
				components: [
					{
						type: 'Content',
						size: 'medium',
						image: createImageConfig({ default: 6, L: 3 }, { default: 'top', S: 'right', L: 'top' }, [150, 216, 322])
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, L: 6 },
				components: [
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										standfirst: {
											show: { default: true }
										}
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										standfirst: {
											show: { default: true }
										}
									}
								]
							}
						]
					},
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium'
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										image: createImageConfig(
											{ default: 12, S: 6, L: 3 },
											{ default: 'right' },
											[161, 225],
											{ show: { default: true, S: false, XXL: true }}
										)
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
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: 'Content',
						size: 'small',
						image: createImageConfig(
							{ default: 12, M: 3 },
							{ default: 'right' },
							[161, 225],
							{ show: { default: true, S: false, XXL: true }}
						)
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			}
		]
	}
];
