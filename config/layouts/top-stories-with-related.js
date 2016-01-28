import Content from '../../components/card/content';

export default [
	//Column 0
	{
		type: 'column',
		colspan: { default: 12, M: 5 },
		cards:
		[
			{ type: Content,
				size: 'large-top-story',
				related: { default: 1, M: 3},
				standFirst: { default: true },
				image: { default: true },
				imageSrcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 }
			}
		]
	},
	//Column 1
	{
		colspan: { default: 12, M: 5 },
		cards: [
			{ type: Content,
				size: 'medium',
				standFirst: { default: true },
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: 'medium',
				landscape: { default: 'true' }
			},
			{ type: Content,
				size: 'medium',
				image: { default: true },
				imageSrcSet: { default: 449, s: 659, m: 355, l: 292, xl: 411 },
				landscape: { default: 'true' },
				imgYCentre: true
			}
		],
	},
	//Column 2
	{
		className: 'condensed-list',
		colspan: { default: 12, M: 2 },
		cards: [
			{
				type: Content,
				size: 'small',
				hideTag: true,
				landscape: { default: 'true' }
			},
			{
				type: Content,
				size: 'small',
				hideTag: true,
				landscape: { default: 'true' }
			},
			{
				type: Content,
				size: 'small',
				hideTag: true,
				landscape: { default: 'true' }
			},
			{
				type: Content,
				size: 'small',
				hideTag: true,
				landscape: { default: 'true' }
			}
		],
	}
];
