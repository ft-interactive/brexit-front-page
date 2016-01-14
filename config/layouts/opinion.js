import Content from '../../components/card/content';

export default [
	//Column 0
	{
		colspan: { default: 12, M: 3 },
		cards:
		[
			{ type: Content,
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
				type: Content,
				size: { default: 'medium' },
			},
			{
				type: Content,
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
				type: Content,
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false, }
			},
			{
				type: Content,
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
				type: Content,
				size: { default: 'tiny' },
			},
			{
				type: Content,
				size: { default: 'tiny' },
				image: { default: true },
				landscape: { default: true, M: false }
			},
			{
				type: Content,
				size: { default: 'tiny' },
			}
		]
	},
];
