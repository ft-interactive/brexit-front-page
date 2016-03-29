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
								colspan: { default: 12, M: 6 },
								components: [
									{
										type: Content,
										size: 'large-top-story',
										related: {
											show: true,
											colspan: { default: 12}
										},
										showRelated: true,
										showStandfirst: true,
										image: {
											sizes: { default: 449, s: 659, m: 432, l: 357, xl: 411 }
										}
									}
								]
							},
							//Column 1
							{
								type: Column,
								colspan: { default: 12, M: 6},
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true,
										image: {
											position: { default: 'left' },
											sizes: { default: 180, s: 264, m: 173, l: 143, xl: 147 }
										}
									},
									{
										type: Content,
										size: 'medium',
										showStandfirst: true
									},
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

			//Column 2
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
