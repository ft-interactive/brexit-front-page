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
							//Column 0
							{
								type: Column,
								colspan: { default: 12 },
								components: [
									{
										type: Content,
										size: 'large-top-story',
										showStandfirst: true,
										related: {
											show: true,
											colspan: { default: 12, S: 4 }
										},
										image: {
											sizes: { default: 225, s: 330, m: 450, l: 374, xl: 384 },
											position: { default: 'right' }
										}
									}
								]
							}
						]
					},
					{
						type: Row,
						components: [
							//Column 0
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium',
										image: {
											position: { default: 'left', M: 'top' },
											sizes: { default: 180, s: 264, m: 277, l: 226, xl: 233 }
										}
									}
								]
							},
							//Column 1
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium'
									},
									{
										type: Content,
										size: 'medium'
									}
								]
							},
							//Column 2
							{
								type: Column,
								colspan: { default: 12, M: 4 },
								components: [
									{
										type: Content,
										size: 'medium',
										image: {
											position: { default: 'left', M: 'top' },
											sizes: { default: 180, s: 264, m: 277, l: 226, xl: 233 }
										}
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
