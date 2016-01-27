import Content from '../../components/card/content';

export default [
	//Column 0
	{
		type: 'column',
		colspan: { default: 12, M: 5 },
		items:
		[
			{ type: Content,
				size: 'large-top-story',
				related: { default: 1, M: 3},
				standFirst: { default: true },
				image: { default: true },
				imageSrcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
			},
			{ type: Content,
				size: 'medium',
				landscape: { default: 'true' },
			}
		]
	},
	//Column 1
	{
		colspan: { default: 12, M: 4 },
		items: [
			{ type: Content,
				size: 'small',
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: 'small',
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: 'small',
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: 'small',
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: 'small',
				landscape: { default: 'true' }
			}
		],
	},
	//Column 2
	{
		colspan: { default: 12, M: 3 },
		items: [
			{
				type: Content,
				size: 'tiny',
				landscape: { default: 'true' }
			},
			{
				type: Content,
				size: 'tiny',
				landscape: { default: 'true' }
			},
			{
				type: Content,
				size: 'tiny',
				landscape: { default: 'true', M: false },
				image: { default: 'true' },
				imageSrcSet: { default: 100, s: 100, m: 199, l: 161, xl: 233 }
			},
			{
				type: Content,
				size: 'tiny',
				landscape: { default: 'true' }
			}
		],
	}
];
