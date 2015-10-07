import React, {Component} from 'react';

import SectionTopStories from '../sections/top-stories';
import SectionOpinion from '../sections/opinion';
import SectionEditorsPicks from '../sections/editors-picks';

const sectionConfig = [
	{
			id: 'top-stories',
			component: SectionTopStories,
			content: 'top',
			sidebarContent: 'fastFT'
	},
	{
			id: 'opinion',
			component: SectionOpinion,
			content: 'opinion'
	},
	{
			id: 'editors-pics',
			component: SectionEditorsPicks,
			content: 'editorsPicks'
	},
]

export default class Layout extends Component {
	render() {
		const sections = sectionConfig.map((section) => {
			return (
				<div id={section.id}>
					<section.component content={this.props.content[section.content]} sidebarContent={this.props.content[section.sidebarContent]} />
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
