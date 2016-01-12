import Content from '../../components/card/content';

export default [
	{
		colspan: { default: 12 },
		cards: [
			{
				type: Content,
				size: 'small',
				image: { default: true },
				landscape: { default: true, M: false, L: true },
				srcSet: { default: 100, s: 100, m: 277, l: 100, xl: 100 }
			},
			{
				type: Content,
				size: 'small'
			}
		]
	}
];
