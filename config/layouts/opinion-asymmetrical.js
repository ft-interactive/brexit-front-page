import createImageConfig from '../../shared/libs/create-image-config';

export default [
	{
		type: 'Row',
		components: [
			{
				type: 'Column',
				colspan: {default:12, L:4},
				components: [
					{
						type: 'Content',
						size: 'large',
						standfirst:{show:{default:true}},
						image: createImageConfig({default:12, M:12, L:12}, {default:'bottom', M:'left', L:'bottom'}, [161, 266, 600])
					}
				]
			},
			{
				type: 'Column',
				colspan: {default:12, L:4},
				components: [
					{
						type:'Row',
						components: [
							{
								type: 'Column',
								colspan: {default:12, M:4, L:12},
								components: [
									{
										type:'Content',
										size:'medium'
									}
								]
							},
							{
								type: 'Column',
								colspan: {default:12, M:4, L:12},
								components: [
									{
										type:'Content',
										size:'medium'
									}
								]
							},
							{
								type: 'Column',
								colspan: {default:12, M:4, L:12},
								components: [
									{
										type:'Content',
										size:'medium'
									}
								]
							}
						]
					}
				]
			},
			{
				type: 'Column',
				colspan: {default:12, L:4},
				components: [
					{
						type:'Row',
						components: [
							{
								type: 'Column',
								colspan: {default:12, S:6, L:12},
								components: [
									{
										type: 'Content',
										size: 'small'
									}
								]
							},
							{
								type: 'Column',
								colspan: {default:12, S:6, L:12},
								components: [
									{
										type: 'Content',
										size: 'small'
									}
								]
							}
						]
					},
					{
						type:'Row',
						components: [
							{
								type: 'Column',
								colspan: {default:12, S:6, L:12},
								components: [
									{
										type: 'Content',
										size: 'small'
									}
								]
							},
							{
								type: 'Column',
								colspan: {default:12, S:6, L:12},
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
