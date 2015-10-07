import React, {Component} from 'react';
import dateFormat from 'dateformat';

import Section from '../section/section';

import TopStories from '../top-stories/top-stories';
import Opinion from '../opinion/opinion';
import EditorsPicks from '../editors-picks/editors-picks';
import FastFt from '../fast-ft/fast-ft';

const displayDate = dateFormat(new Date, 'dS mmmm yyyy');

const sectionConfig = (props) => {
	return [
		{
				id: 'top-stories',
				title: 'Top Stories',
				date: displayDate,
				content: props.content.top.leads.concat(props.content.top.items),
				contentComponent: TopStories,
				sidebarContent: props.content.fastFT,
				sidebarComponent: FastFt
		},
		{
				id: 'opinion',
				title: 'Opinion',
				content: props.content.opinion.items,
				contentComponent: Opinion
		},
		{
				id: 'editors-pics',
				title: 'Editor\'s Picks',
				content: props.content.editorsPicks.items,
				contentComponent: EditorsPicks
		},
	];
}

export default class Layout extends Component {
	render() {
		const sections = sectionConfig(this.props).map((section) => {
			return (
				<div id={section.id}>
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
