import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

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
											sizes: { default: 449, s: 659, m: 450, l: 384 },
											position: { default: 'top', M: 'right' }
										},
										related: {
											show: true,
											colspan: { default: 12, S: 4 }
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
								colspan: { default: 12, M: 8},
								components: [
									{
										type: Content,
										size: 'medium',
										image: {
											sizes: { default: 449, s: 659, m: 450, l: 374 },
											position: { default: 'left', M: 'right' }
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
				isList: true,
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
										size: 'medium',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4, XL: 12 },
								components: [
									{
										type: Content,
										size: 'medium',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 4, XL: 12 },
								components: [
									{
										type: Content,
										size: 'medium',
										hideTag: true
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
										hideTag: true,
										show: { default: false, XL: true }
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
										hideTag: true,
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
