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
								colspan: { default: 12 },
								components: [
									{
										type: 'Content',
										size: 'large-top-story',
										standfirst: {
											show: { default: true }
										},
										related: {
											show: { default: true, M: false, XL: true },
											colspan: { default: 12 }
										},
										image: {
											position: { default: 'top', M: 'right' },
											sizes: { default: 449, s: 659, m: 450, l: 423, xl: 517 }
										}
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
							default: 3, XL: 4
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
						image: {
							position: { default: 'top', S: 'right', L: 'top' },
							sizes: { default: 210, s: 158, m: 216, l: 259, xl: 322 }
						}
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
						image: {
							position: { default: 'top', S: 'right', L: 'top' },
							sizes: { default: 210, s: 158, m: 216, l: 259, xl: 322 }
						}
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
										image: {
											show: { default: true, S: false, XXL: true },
											position: { default: 'right' },
											sizes: { default: 225, xl: 161 }
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
						image: {
							show: { default: true, S: false, XXL: true },
							position: { default: 'right' },
							sizes: { default: 225, xl: 161 }
						}
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
