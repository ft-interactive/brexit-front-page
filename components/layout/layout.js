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
					[{ type: 'large'}],
					[{ type: 'medium'}, { type: 'small', showImage: false }],
					[{ type: 'small'}, { type: 'headline'}, { type: 'headline'}, { type: 'headline'}]
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
					[{ type: 'large' }],
					[{ type: 'medium' }],
					[{ type: 'ad' }, { type: 'headline' }],
					[{ type: 'small' }, { type: 'small', showImage: false }]
				],
				content: props.content.opinion.items
		},
		{
				id: 'editors-pics',
				title: 'Editor\'s Picks',
				style: 'editors-pics',
				columns: ['12 M4 L2', '12 M4 L2', '12 M4 L2', '12 M4 L2', '12 M4 L2', '12 M4 L2'],
				cards: [
					[{ type: 'tall' }],
					[{ type: 'tall' }],
					[{ type: 'tall' }],
					[{ type: 'tall' }],
					[{ type: 'tall' }],
					[{ type: 'tall' }]
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
