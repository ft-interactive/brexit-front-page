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
								colspan: { default: 9 },
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
											sizes: { default: 500 },
											position: { default: 'right' }
										}
									}
								]
							},
							{
								type: Column,
								colspan: { default: 3 },
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
								colspan: { default: 6 },
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
														size: 'medium',
														showStandfirst: true,
														image: {
															position: { default: 'left' },
															sizes: { default: 300 }
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
												colspan: { default: 6 },
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
												colspan: { default: 6 },
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
							},
							{
								type: Column,
								colspan: { default: 3 },
								components: [
									{
										type: Content,
										size: 'medium',
										showStandfirst: true,
										image: {
											position: { default: 'bottom' },
											sizes: { default: 300 }
										}
									}
								]
							},
							{
								type: Column,
								colspan: { default: 3 },
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
												colspan: { default: 12 },
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
				]
			}
		]
	}

];
