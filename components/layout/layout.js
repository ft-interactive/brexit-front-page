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
			cards: [
				{ column: 0, width: 5, tagSize: 'large', titleSize: 'large', standFirst: 'large', image: 'desktop', related: true },
				{ column: 1, width: 4, tagSize: 'large', titleSize: 'medium', standFirst: 'medium', image: 'desktop'},
				{ column: 1, width: 4, tagSize: 'large', titleSize: 'medium' },
				{ column: 2, width: 3, tagSize: 'medium', titleSize: 'small', image: 'desktop'},
				{ column: 2, width: 3, tagSize: 'small', titleSize: 'tiny'},
				{ column: 2, width: 3, tagSize: 'small', titleSize: 'tiny'},
				{ column: 2, width: 3, tagSize: 'small', titleSize: 'tiny'}
			],
			content: props.content.top.leads.concat(props.content.top.items),
			sidebarContent: props.content.fastFT,
			sidebarComponent: FastFt
		},
		{
			id: 'opinion',
			title: 'Opinion',
			style: 'opinion',
			cards: [
				{ column: 0, width: 3, tagSize: 'large', titleSize: 'large', standFirst: 'large', image: 'always' },
				{ column: 1, width: 3, tagSize: 'large', titleSize: 'medium', standFirst: 'medium'},
				{ column: 1, width: 3, tagSize: 'large', titleSize: 'medium', standFirst: 'medium'},
				{ column: 2, width: 4, ad: true },
				{ column: 2, width: 4, tagSize: 'large', titleSize: 'medium' },
				{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
				{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small' },
				{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small' }
			],
			content: props.content.opinion.items
		},
		{
			id: 'editors-pics',
			title: 'Editor\'s Picks',
			style: 'editors-pics',
			cards: [
				{ column: 0, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
				{ column: 1, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
				{ column: 2, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
				{ column: 3, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
				{ column: 4, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' },
				{ column: 5, width: 2, tagSize: 'medium', titleSize: 'small', image: 'desktop' }
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
