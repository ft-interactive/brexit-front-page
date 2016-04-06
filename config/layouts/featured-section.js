export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12 },
				components: [
					{
						type: 'Content',
						size: 'small',
						image: {
							position: { default: 'left', M: 'bottom', L: 'left' },
							sizes: { default: 180, s: 264, m: 277, l: 143, xl: 176 }
						}
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
