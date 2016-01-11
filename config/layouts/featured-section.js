export default [
	{
		colspan: { default: 12 },
		cards: [
			{
				type: 'content',
				size: { default: 'small' },
				image: { default: true },
				landscape: { default: true, M: false, L: true }
			},
			{
				type: 'content',
				size: { default: 'small' }
			}
		]
	}
];
