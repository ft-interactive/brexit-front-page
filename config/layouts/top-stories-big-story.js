import { Row, Column, Content } from '@financial-times/n-section';

export default [
	{ type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, XL: 9},
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12 },
								components: [
									{
										type: Content,
										size: 'large-top-story',
										showStandfirst: true,
										isMain: true,
										image: {
											position: { default: 'top', M: 'right' },
											sizes: { default: 449, s: 659, m: 450, l: 384 }
										}
									}
								]
							}
						]
					},
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, S: 4 },
								components: [
									{
										type: Content,
										size: 'small',
										isPictureStory: true,
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 4 },
								components: [
									{
										type: Content,
										size: 'small',
										isPictureStory: true,
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 4 },
								components: [
									{
										type: Content,
										size: 'small',
										isPictureStory: true,
										hideTag: true
									}
								]
							}
						]
					},
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, M: 8},
								components: [
									{
										type: Content,
										size: 'medium',
										image: {
											position: { default: 'left', M: 'right' },
											sizes: { default: 180, s: 274, m: 450, l: 374 }
										}
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							}
						]
					}
				]
			},
			{
				type: Column,
				colspan: { default: 12, XL: 3 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, M: 4, XL: 12 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4, XL: 12 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4, XL: 12 },
								components: [
									{
										type: Content,
										size: 'medium'
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12 },
								components: [
									{
										type: Content,
										size: 'medium',
										show: { default: false, XL: true }
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
