export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, XL: 6 },
				components: [
					{
						type: 'Content',
						size: 'large',
						showStandfirst: true,
						image: {
							position: { S: 'left', XL: 'bottom' },
							sizes: { default: 449, s: 264, m: 173, l: 221, xl: 322 }
						}
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, XL: 6 },
				components: [
					{
						type: 'Content',
						size: 'medium',
						showStandfirst: true
					},
					{
						type: 'Content',
						size: 'small'
					},
					{
						type: 'Content',
						size: 'small'
					}
				]
			}
		]
	}
];
