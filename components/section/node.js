import React, {Component} from 'react';
import SectionMeta from './section-meta/section-meta';
import SectionContent from './section-content/section-content';
import SectionSources from './section-sources/section-sources';

import colspan from '../../client/utils/colspan';

const classify = classes => classes
	.filter(className => className)
	.join(' ');

const getAlternateSourceTrackable = (sources, uuid) => sources.find(s => s.uuid === uuid).title;

export default class SectionNode extends Component {

 	constructor(props) {
 		super(props);
 		this.state = { layout: props.layout, content: props.content, selectedSource: 'initial' };
 	}

	loadContent() {
		// do nothing on server
	}

	render () {
		const cols = this.props.cols;
		const trackable = this.props.trackable || this.props.id;
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
				className={'o-grid-row section section--' + this.props.style}
				data-trackable={trackable + (this.state.selectedSource === 'initial' ? '' : ' | alternate-source | ' + getAlternateSourceTrackable(this.props.dynamicContent.sources,this.state.selectedSource))}>
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
						this.props.dynamicContent ?
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
							id={this.props.id}
							style={this.props.style}
							layout={this.state.layout}
							items={this.state.content.main}
						/>
					</div>
					{
						cols.sidebar ?
							<aside
								id={this.props.id + '-section-aside'}
								data-o-grid-colspan={colspan(cols.sidebar)}
								className={sectionAsideClasses}
								data-trackable={this.props.sidebarComponent.id}>
									<div>
										<this.props.sidebarComponent.component articles={
										this.state.content.sidebar ? this.state.content.sidebar : null}
										adClasses={
										this.props.sidebarComponent.adClasses} />
									</div>
							</aside>
							: null

					}
			</section>
		);
	}
}
