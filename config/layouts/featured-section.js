import createImageConfig from '../../shared/libs/create-image-config';

export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, XL: 6 },
				components: [
					{
						type: 'Content',
						size: 'large',
						standfirst: {
							show: { default: true }
						},
						image: createImageConfig({ default: 6, M: 12}, { default: 'right', M:'bottom'}, [112, 221, 322])
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, XL: 6 },
				components: [
					{
						type: 'Content',
						size: 'medium',
						standfirst: {
							show: { default: true }
						}
					},
					{
						type: 'Content',
						size: 'small'
					},
					{
						type: 'Content',
						size: 'small'
					}
				]
			}
		]
	}
];
