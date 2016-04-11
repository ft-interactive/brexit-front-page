export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, L: 9 },
				components: [
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, M: 8 },
								components: [
									{
										type: 'Content',
										size: 'large-top-story',
										standfirst: {
											show: { default: true }
										},
										image: {
											position: { default: 'right' },
											sizes: { default: 225, s: 330, m: 294, l: 276, xl: 339 }
										}
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
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										image: {
											position: { default: 'left' },
											sizes: { default: 180, s: 264, m: 111, l: 104, xl: 129 }
										}
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: 'Content',
										size: 'medium'
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: 'Content',
										size: 'medium'
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
						type: 'FastFtNew',
						count: {
							default: 6
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
			}
		]
	}
];
