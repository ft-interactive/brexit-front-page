import React, {Component} from 'react';
import dateFormat from 'dateformat';

import Section from '../section/section';
import FastFt from '../fast-ft/fast-ft';

const displayDate = dateFormat(new Date, 'dS mmmm yyyy');

const sectionConfig = (props) => {
	return [
		{
				id: 'top-stories',
				title: 'Top Stories',
				style: 'top-stories',
				date: displayDate,
				columns: ['12 M5', '12 M4', '12 M3'],
				cards: [
					[{ tagSize: 'large', titleSize: 'large', standFirst: true, image: true, related: true }],
					[
						{ tagSize: 'medium', titleSize: 'medium', standFirst: true, image: true},
						{ tagSize: 'small', titleSize: 'small', image: false }
					],
					[
						{ tagSize: 'small', titleSize: 'small', image: true},
						{ tagSize: 'headline', titleSize: 'headline', image: false},
						{ tagSize: 'headline', titleSize: 'headline', image: false},
						{ tagSize: 'headline', titleSize: 'headline', image: false}
					]
				],
				content: props.content.top.leads.concat(props.content.top.items),
				sidebarContent: props.content.fastFT,
				sidebarComponent: FastFt
		},
		{
				id: 'opinion',
				title: 'Opinion',
				style: 'opinion',
				columns: ['12 M3', '12 M3', '12 M4', '12 M2'],
				cards: [
					[{ standFirst: true, tagSize: 'large', titleSize: 'large', standFirst: true, image: true }],
					[{ standFirst: true, tagSize: 'medium', titleSize: 'medium', standFirst: true, image: true }],
					[
						{ ad: true },
						{ tagSize: 'headline', titleSize: 'headline', image: false }
					],
					[
						{ tagSize: 'small', titleSize: 'small', image: true },
						{ tagSize: 'small', titleSize: 'small', image: false }
					]
				],
				content: props.content.opinion.items
		},
		{
				id: 'editors-pics',
				title: 'Editor\'s Picks',
				style: 'editors-pics',
				columns: ['12 M4 L2', '12 M4 L2', '12 M4 L2', '12 M4 L2', '12 M4 L2', '12 M4 L2'],
				cards: [
					[{ tagSize: 'small', titleSize: 'small', image: true }],
					[{ tagSize: 'small', titleSize: 'small', image: true }],
					[{ tagSize: 'small', titleSize: 'small', image: true }],
					[{ tagSize: 'small', titleSize: 'small', image: true }],
					[{ tagSize: 'small', titleSize: 'small', image: true }],
					[{ tagSize: 'small', titleSize: 'small', image: true }]
				],
				content: props.content.editorsPicks.items
		}
	];
}

export default class Layout extends Component {
	render() {
		const sections = sectionConfig(this.props).map((section) => {
			return (
				<div id={section.id} key={section.id}>
					<Section {...section} />
				</div>
			);
		});

		return (
			<div>
				{sections}
			</div>
		);
	}
}
