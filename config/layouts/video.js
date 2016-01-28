import Video from '../../components/card/video';
import Column from '../../components/column/column';
import Row from '../../components/row/row';
import Card from '../../components/card/card';


export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Card,
						cardType: Video
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Card,
						cardType: Video
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Card,
						cardType: Video
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, S: 6, M: 3 },
				components: [
					{
						type: Card,
						cardType: Video
					}
				]
			}
		]
	}
];
