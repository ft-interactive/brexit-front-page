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
											sizes: { default: 449, s: 659, m: 450, l: 374 },
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
						components: [
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
							}
						]
					}
				]
			}
		]
	}

];
