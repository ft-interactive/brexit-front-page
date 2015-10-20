import React, {Component} from 'react';

import Section from '../section/section';

const sectionContent = (content) => {
	return [
		{ body: content.top.items, sidebar: content.fastFT },
		{ body: content.opinion.items },
		{ body: content.editorsPicks.items }
	];
}

export default class Layout extends Component {
	render () {
		const content = sectionContent(this.props.content);
		const sections = this.props.layout.map((section, i) => {
			return (
				<div id={section.id} key={section.id}>
					<Section {...section} content={content[i].body} sidebarContent={content[i].sidebar} />
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
