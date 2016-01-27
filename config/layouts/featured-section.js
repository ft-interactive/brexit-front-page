import Content from '../../components/card/content';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Card from '../../components/card/card';


export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12 },
				components: [
					{
						type: Card,
						cardType: Content,
						size: 'small',
						image: { default: true },
						landscape: { default: true, M: false, L: true },
						imageSrcSet: { default: 100, s: 100, m: 277, l: 100, xl: 100 }
					},
					{
						type: Card,
						cardType: Content,
						size: 'small'
					}
				]
			}
		]
	}
];
