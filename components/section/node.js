import React, {Component} from 'react';
import SectionMeta from './section-meta/section-meta';
import SectionContent from './section-content/section-content';
import SectionSources from './section-sources/section-sources';

import colspan from '../../client/utils/colspan';

const classify = classes => classes
	.filter(className => className)
	.join(' ');

export default class SectionNode extends Component {

 	constructor(props) {
 		super(props);
 		this.state = { content: props.content, selectedSource: 'initial' };
 	}


	loadContent() {
		// do nothing on server
	};


	render () {
		const cols = this.props.cols;
		const sectionContentClasses = classify([
			'section__column',
			'section__column--content',
			this.props.isTab ? 'o-tabs__tabpanel' : ''
		]);
		const sectionAsideClasses = classify([
			'section__column',
			'section__column--sidebar',
			this.props.sidebarComponent && this.props.sidebarComponent.isTab ? 'o-tabs__tabpanel' : ''
		]);
		return (
			<section
				className={'section o-grid-container o-grid-container--compact section--' + this.props.style}
				data-trackable={this.props.id + (this.state.selectedSource === 'initial' ? '' : ' | alternate-source')}>
				<div className="o-grid-row">
					{
						cols.meta ?
							<div
								data-o-grid-colspan={colspan(cols.meta)}
								className="section__column section__column--meta">
								<SectionMeta title={this.props.title} date={this.props.date} />
							</div>
							: null
					}
					{
						this.props.showMostPopularByIndustry && this.props.dynamicContent ?
							<div
								data-o-grid-colspan="12"
								className="section__column section__column--sources">
								<SectionSources dynamicContent={this.props.dynamicContent} onChange={this.loadContent.bind(this)} selectedSource={this.state.selectedSource}/>
							</div>
							: null
					}
					<div
						id={this.props.id + '-section-content'}
						data-o-grid-colspan={colspan(cols.content)}
						className={sectionContentClasses}>
						<SectionContent
							style={this.props.style}
							columns={this.props.columns}
							cards={this.props.cards}
							items={this.state.content}
						/>
					</div>
					{
						cols.sidebar ?
							<aside
								id={this.props.id + '-section-aside'}
								data-o-grid-colspan={colspan(cols.sidebar)}
								className={sectionAsideClasses}
								data-trackable={this.props.sidebarComponent.id}>
								<this.props.sidebarComponent.component articles={this.props.sidebarContent.items} />
								<div className="sidebar-ad-placeholder ad-placeholder"></div>
							</aside>
							: null
					}
				</div>
			</section>
		);
	}
}
