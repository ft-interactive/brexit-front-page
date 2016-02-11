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
											colspan: { default: 12, M: 4 }
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
										size: 'small',
										image: {
											sizes: { default: 449, s: 659, m: 277, l: 226, xl: 233 },
											position: { default: 'top' }
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
										size: 'small',
										showStandfirst: true
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
										size: 'small'
									},
									{
										type: Content,
										size: 'small'

									}
								]
							}
						]
					}
				]
			},
			{
				type: Column,
				condensed: true,
				colspan: { default: 12, XL: 3 },
				components: [
					{
						type: Row,
						isCompact: true,
						components:
							[
								{
									type: Column,
									colspan: { default: 12, M: 3, XL: 12 },
									components: [
										{
											type: Content,
											size: 'tiny',
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
											size: 'tiny',
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
											size: 'tiny',
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
											size: 'tiny',
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
											size: 'tiny',
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
