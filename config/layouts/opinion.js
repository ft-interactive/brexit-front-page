import Content from '../../components/card/content';

export default [
	//Column 0
	{
		colspan: { default: 12, M: 3 },
		cards:
		[
			{ type: Content,
				size: 'large',
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
				size: 'medium',
			},
			{
				type: Content,
				size: 'small',
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
				size: 'small',
				image: { default: true },
				landscape: { default: true, M: false, }
			},
			{
				type: Content,
				size: 'small',
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
				size: 'tiny',
			},
			{
				type: Content,
				size: 'tiny',
				image: { default: true },
				landscape: { default: true, M: false }
			},
			{
				type: Content,
				size: 'tiny',
			}
		]
	},
];
