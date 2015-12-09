import React, {Component} from 'react';

import Section from '../section/section';
import colspan from '../../client/utils/colspan';

import cloneDeep from 'lodash.clonedeep';

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
			body: content.popularArticles
		}
	};
};

export default class Layout extends Component {
	render () {
		const content = sectionContent(this.props.content);
		const sections = this.props.layout.map(section => {
			const sectionContent = content[section.id];

			if (!sectionContent.body || !sectionContent.body.length) {
				return null;
			}

			const sectionToRender = cloneDeep(section);
			if(section.overrides) {
				section.overrides.forEach((override) => {
					if(override.condition(sectionContent.body)) {
						Object.assign(sectionToRender.cards, override.cards);
					}
				});
			}
			return (
				<div id={section.id} key={section.id} data-o-grid-colspan={colspan(section.size)}
				data-section-content={ this.props.showMostPopularByIndustry && sectionToRender.altSources ? JSON.stringify(sectionContent) : null } >
					<Section
						{...sectionToRender}
						content={sectionContent.body}
						sidebarContent={sectionContent.sidebar}
						showMostPopularByIndustry={this.props.showMostPopularByIndustry}
						data-o-grid-colspan="12"/>
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
