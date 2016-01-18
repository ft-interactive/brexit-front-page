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
				image: { default: true },
				imageSrcSet: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
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
				landscape: { default: true, M: false },
				imageSrcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
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
				landscape: { default: true, M: false },
				imageSrcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
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
				landscape: { default: true, M: false },
				imageSrcSet: { default: 100, s: 100, m: 199, l: 259, xl: 322 }
				
			},
			{
				type: Content,
				size: 'tiny',
			}
		]
	},
];
