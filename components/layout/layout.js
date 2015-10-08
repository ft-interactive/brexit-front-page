import React, {Component} from 'react';
import {format as dateFormat} from 'o-date';

import Section from '../section/section';
import FastFt from '../fast-ft/fast-ft';

const displayDate = dateFormat(new Date(), 'EEEE MMMM yyyy');

const sectionConfig = (props) => {
	return [
		{
			id: 'top-stories',
			title: 'Top Stories',
			style: 'top-stories',
			date: displayDate,
			columns: ['12 M5', '12 M4', '12 M3'],
			cards: [
				[{ tagSize: 'large', titleSize: 'large', standFirst: 'large', image: 'desktop', related: true }],
				[
					{ tagSize: 'large', titleSize: 'medium', standFirst: 'medium', image: 'desktop'},
					{ tagSize: 'large', titleSize: 'medium' }
				],
				[
					{ tagSize: 'medium', titleSize: 'small', image: 'desktop'},
					{ tagSize: 'small', titleSize: 'tiny'},
					{ tagSize: 'small', titleSize: 'tiny'},
					{ tagSize: 'small', titleSize: 'tiny'}
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
				[{ tagSize: 'large', titleSize: 'large', standFirst: 'large', image: 'always' }],
				[
					{ tagSize: 'large', titleSize: 'medium', standFirst: 'medium'},
					{ tagSize: 'large', titleSize: 'medium', standFirst: 'medium'}
				],
				[
					{ ad: true },
					{ tagSize: 'large', titleSize: 'medium' }
				],
				[
					{ tagSize: 'medium', titleSize: 'small', image: 'desktop' },
					{ tagSize: 'medium', titleSize: 'small' },
					{ tagSize: 'medium', titleSize: 'small' }
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
				[{ tagSize: 'medium', titleSize: 'small', image: 'desktop' }],
				[{ tagSize: 'medium', titleSize: 'small', image: 'desktop' }],
				[{ tagSize: 'medium', titleSize: 'small', image: 'desktop' }],
				[{ tagSize: 'medium', titleSize: 'small', image: 'desktop' }],
				[{ tagSize: 'medium', titleSize: 'small', image: 'desktop' }],
				[{ tagSize: 'medium', titleSize: 'small', image: 'desktop' }]
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
