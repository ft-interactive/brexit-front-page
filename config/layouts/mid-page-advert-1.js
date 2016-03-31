import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Ad from '../../shared/components/ad/ad';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12 },
				components: [
					{
						type: Ad,
						adClasses: 'mid-page-1-advert',
						adName: 'mpu',
						targeting: 'pos=entry;'
					}
				]
			}
		]
	}
];
