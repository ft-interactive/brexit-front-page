import React, {Component} from 'react';

import Section from '../section/section';

const sectionContent = (content) => {
	return {
		'top-stories': {
			body: content.top.items,
			sidebar: content.fastFT
		},
		'opinion': {
			body: content.opinion.items
		},
		'editors-picks': {
			body: content.editorsPicks.items
		},
		'video': {
			body: content.videos.map(video => Object.assign({}, { type: 'video' }, video))
		},
		'around-the-ft': {
			body: [].concat(
				content.technology.items.slice(0, 2),
				content.markets.items.slice(0, 2),
				content.lifestyle.items.slice(0, 2)
			)
		}
	};
}

export default class Layout extends Component {
	render () {
		const content = sectionContent(this.props.content);
		const sections = this.props.layout.map(section => {
			const sectionContent = content[section.id];
			return (
				<div id={section.id} key={section.id}>
					<Section {...section} content={sectionContent.body} sidebarContent={sectionContent.sidebar} />
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
