import createImageConfig from '../../shared/libs/create-image-config';

export default () => [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: { default: 12, M: 4, L: 3 },
				components: [
					{
						type: 'Content',
						size: 'large',
						standfirst: {
							show: { default: true }
						},
						image: createImageConfig({ default: 12, M: 4, L: 3 }, { default: 'bottom' }, [277, 322, 659])
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, M: 8, L: 6 },
				components: [
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, M: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										standfirst: {
											show: { default: true }
										}
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										standfirst: {
											show: { default: true }
										}
									}
								]
							}
						]
					},
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, M: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										standfirst: {
											show: { default: true }
										}
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 6 },
								components: [
									{
										type: 'Content',
										size: 'medium',
										standfirst: {
											show: { default: true }
										}
									}
								]
							}
						]
					}
				]
			},
			{
				type: 'Column',
				colspan: { default: 12, M: 12, L: 3 },
				components: [
					{
						type: 'Row',
						components: [
							{
								type: 'Column',
								colspan: { default: 12, M: 4, L: 12 },
								components: [
									{
										type: 'Content',
										size: 'small'
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 4, L: 12 },
								components: [
									{
										type: 'Content',
										size: 'small'
									}
								]
							},
							{
								type: 'Column',
								colspan: { default: 12, M: 4, L: 12 },
								components: [
									{
										type: 'Content',
										size: 'small'
									}
								]
							}
						]
					}
				]
			}
		]
	}
];
