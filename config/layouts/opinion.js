export default [
	//Column 0
	{
		colspan: { default: 12, M: 3 },
		cards:
		[
			{ type: 'content',
				size: { default: 'medium', L: 'large' },
				standFirst: { default: true },
				image: { default: true }
			}
		]
	},
	//Column 1
	{
		colspan: { default: 12, M: 3 },
		cards:
		[
			{
				type: 'content',
				size: { default: 'medium' },
			},
			{
				type: 'content',
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false }
			},

		]
	},
	//Column 2
	{
		colspan: { default: 12, M: 3 },
		cards:
		[
		{
				type: 'content',
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false, }
			},
			{
				type: 'content',
				size: { default: 'small' },
			}
		]
	},
	//Column 3
	{
		colspan: { default: 12, M: 3 },
		cards:
		[
			{
				type: 'content',
				size: { default: 'tiny' },
			},
			{
				type: 'content',
				size: { default: 'tiny' },
				image: { default: true },
				landscape: { default: true, M: false }
			},
			{
				type: 'content',
				size: { default: 'tiny' },
			}
		]
	},
];
