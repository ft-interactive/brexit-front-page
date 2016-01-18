import Content from '../../components/card/content';

export default [
	{
		colspan: { default: 12 },
		cards: [
			{
				type: Content,
				size: 'small',
				image: { default: true },
				landscape: { default: true, M: false, L: true }
			},
			{
				type: Content,
				size: 'small'
			}
		]
	}
];
