import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, XL: 9 },
				components: [
					{
						type: Row,
						components: [
							//Column 0
							{
								type: Column,
								colspan: { default: 12, S: 6 },
								components: [
									{
										type: Content,
										size: 'large-no-image',
										showStandfirst: true,
										related: {
											show: { default: false, M: true },
											colspan: { default: 12 }
										}
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 6 },
								components: [
									//Column 1
									{
										type: Content,
										size: 'medium',
										hideTag: true,
										isPictureStory: true,
										image: {
											position: { default: 'right', S: 'top' },
											sizes: { default: 225, s: 315, m: 432, l: 357, xl: 366 }
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
											sizes: { default: 100, m: 277, l: 226, xl: 233 }
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
											sizes: { default: 100, m: 277, l: 226, xl: 233 }
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
				variant: 'list',
				colspan: { default: 12, XL: 3 },
				components: [
					{
						type: Row,
						components: [
							//Column 0
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Content,
										size: 'small',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Content,
										size: 'small',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Content,
										size: 'small',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Content,
										size: 'small',
										hideTag: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, M: 3, XL: 12 },
								components: [
									{
										type: Content,
										size: 'small',
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
