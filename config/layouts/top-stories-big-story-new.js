import Row from '../../shared/components/row/row';
import Column from '../../shared/components/column/column';
import Content from '../../shared/components/content/content';
import FastFt from '../../shared/components/fast-ft/fast-ft-new';

export default [
	{ type: Row,
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
								colspan: { default: 12, S: 9 },
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
									}
								]
							},
							{
								type: Column,
								colspan: { default: 12, S: 3 },
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
								colspan: { default: 12, M: 6},
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
								colspan: { default: 12, M: 3 },
								components: [
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
