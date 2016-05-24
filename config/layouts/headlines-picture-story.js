import createImageConfig from '../../shared/libs/create-image-config';

export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, L: 9 },
				components: [
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, S: 6, L: 5 },
								components: [
									{
										type: 'Content',
										size: 'large-no-image',
										standfirst: {
											show: { default: true }
										},
										related: {
											show: { default: true, S: false, M: true },
											colspan: { default: 12 }
										}
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, S: 6, L: 7 },
								components: [
									{
										type: 'Content',
										size: 'small',
										isPictureStory: true,
										standfirst: {
											show: { default: false, S: true, XL: false }
										},
										image: createImageConfig({ default: 12, S: 12, L: 12 }, { default: 'top' }, [322, 500])
									}
								]
							}
						]
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 'hide', S: 'hide', M: 'hide', L: 3 },
				components: [
					{
						type: 'FastFt',
						count: {
							default: 4, XL: 5
						}
					}
				]
			}
		]
	}
];
