export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, M: 6 },
				components: [
					{
						type: 'BrexitLiveResults'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, M: 6 },
				components: [
					{
						type: 'Content',
						size: 'large-no-image',
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
				colspan: { default: 12, S: 6, L: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, S: 6, L: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, S: 6, L: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, S: 6, L: 3 },
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
