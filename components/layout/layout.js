import React, {Component} from 'react';

import Section from '../section/section';

import colspan from '../../client/utils/colspan';

const sectionContent = (content) => {
	return {
		'top-stories': {
			body: content.top.items,
			sidebar: content.fastFT
		},
		opinion: {
			body: content.opinion.items
		},
		'editors-picks': {
			body: content.editorsPicks.items
		},
		video: {
			body: content.videos.map(video => Object.assign({}, { type: 'video' }, video))
		},
		technology: {
			body: content.technology.items
		},
		markets: {
			body: content.markets.items
		},
		'life-and-arts': {
			body: content.lifestyle.items
		},
		'most-popular': {
			body: content.popular.items
		}
	};
};

export default class Layout extends Component {
	render () {
		const content = sectionContent(this.props.content);
		const sections = this.props.layout.map(section => {
			const sectionContent = content[section.id];
			return (
				<div id={section.id} key={section.id} data-o-grid-colspan={colspan(section.size)}>
					<Section {...section} content={sectionContent.body} sidebarContent={sectionContent.sidebar} data-o-grid-colspan="12" />
				</div>
			);
		});

		return (
			<div className="o-grid-row">
				{sections}
			</div>
		);
	}
}
