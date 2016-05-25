export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, M: 4 },
				components: [
					{
						type: 'Content',
						size: 'large'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, M: 8 },
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
										size: 'small'
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, S: 6 },
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
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: 'Content',
										size: 'small'
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: 'Content',
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
