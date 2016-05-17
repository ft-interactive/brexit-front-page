export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 7 },
				components: [
					{
						type: 'BrexitLiveResults'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 5 },
				components: [
					{
						type: 'Content',
						size: 'large',
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
				colspan: { default: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 3 },
				components: [
					{
						type: 'Content',
						size: 'small'
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 3 },
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
