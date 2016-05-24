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
								colspan: { default: 12 },
								components: [
									{
										type: 'Content',
										size: 'large-top-story',
										standfirst: {
											show: { default: true }
										},
										related: {
											show: { default: true, M: false, XL: true },
											colspan: { default: 12 }
										},
										image: createImageConfig({ default: 12, L: 9 }, { default: 'top', M: 'right' }, [280, 400, 517, 659])
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
							default: 3, XL: 4
						}
					}
				]
			}
		]
	}
];
