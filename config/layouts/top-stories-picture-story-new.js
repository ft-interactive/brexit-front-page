import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';
import FastFt from '../../shared/components/fast-ft/fast-ft-new';

export default [
	{
		type: Row,
		components: [
			{
				type: Column,
				colspan: { default: 12 },
				components: [
					{
						type: Row,
						components: [
							{
								type: Column,
								colspan: { default: 12, S: 4 },
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
								colspan: { default: 12, S: 4 },
								components: [
									{
										type: Content,
										size: 'medium',
										isPictureStory: true,
										hideTag: true,
										image: {
											position: { default: 'right', S: 'top' },
											sizes: { default: 225, s: 315, m: 432, l: 357, xl: 366 }
										}
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 4 },
								components: [
									{
										type: FastFt,
										size: 'medium'
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
								colspan: { default: 12, M: 3 },
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
							{
								type: Column,
								colspan: { default: 12, M: 3 },
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
							{
								type: Column,
								colspan: { default: 12, M: 3 },
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
							{
								type: Column,
								colspan: { default: 12, M: 3 },
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
			}
		]
	}
];
