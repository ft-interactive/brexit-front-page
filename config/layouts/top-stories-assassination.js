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
											colspan: { default: 12, S: 4 }
										},
										image: {
											sizes: { default: 100, m: 277, l: 226, xl: 233 },
											position: { default: 'left', M: 'top' }
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
											sizes: { default: 449, s: 659, m: 432, l: 357, xl: 411 },
											position: { default: 'left', M: 'top' }
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
										size: 'medium',
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
										size: 'medium'
									},
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