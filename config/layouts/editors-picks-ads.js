import Content from '../../components/card/content';

export default [
	//Column 0
	{
		colspan: { default: 12, S: 6, M: 3},
		cards:
		[
			{ type: Content,
				size: 'small',
				landscape: { default: true, S: false },
				image: { default: true },
				imageStick: { default: true}
			}
		]
	},
	//Column 1
	{
		colspan: { default: 12, S: 6, M: 3},
		cards:
		[
			{ type: Content,
				size: 'small',
				landscape: { default: true, S: false },
				image: { default: true },
				imageStick: { default: true}
			}
		]
	},
	//Column 2
	{
		colspan: { default: 12, S: 6, M: 3 },
		cards:
		[
			{ type: Content,
				size: 'small',
				landscape: { default: true, S: false },
				image: { default: true },
				imageStick: { default: true}
			}
		]
	},
	//Column 3
	{
		colspan: { default: 12, S: 6, M: 3 },
		cards:
		[
			{ type: Content,
				size: 'small',
				landscape: { default: true, S: false },
				image: { default: true },
				imageStick: { default: true}
			}
		]
	}
];
