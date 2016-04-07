export default [
	{
		type: 'Row',
		components: [
			//Column 0
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: 'Content',
						size: 'large',
						standfirst: {
							show: { default: true }
						},
						image: {
							sizes: { default: 449, s: 659, m: 199, l: 357, xl: 430 }
						}
					}
				]
			},
			//Column 1
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: 'Content',
						size: 'large',
						standfirst: {
							show: { default: true }
						}
					},
					{
						type: 'Content',
						size: 'small'
					}

				]
			},
			//Column 2
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components: [
					{
						type: 'Content',
						size: 'large',
						standfirst: {
							show: { default: true }
						},
						image: {
							sizes: { default: 449, s: 659, m: 199, l: 357, xl: 430 }
						}
					}
				]
			},
			//Column 3
			{
				type: 'Column',
				colspan: { default: 12, M: 3 },
				components:
					[
						{
							type: 'Content',
							size: 'small'
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
