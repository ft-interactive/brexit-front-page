import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12, L: 6 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 6, L: 12 },
								components: [
									{
										type: Content,
										size: 'large',
										showStandfirst: true,
										image: {
											position: { default: 'top', L: 'left' },
											sizes: { default: 432, s: 432, m: 432, l: 271, xl: 271 }
										}
									},
								]
							},
							{
								type: Column,
								colspan: { default: 6, L: 12 },
								components: [
									{
										type: Content,
										size: 'large',
										showStandfirst: true,
										image: {
											position: { default: 'top', L: 'right' },
											sizes: { default: 432, s: 432, m: 432, l: 271, xl: 271 }
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
				colspan: { default: 12, L: 6 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, L: 6 },
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, L: 6 },
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true
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
								colspan: { default: 12, L: 6 },
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, L: 6 },
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true
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
