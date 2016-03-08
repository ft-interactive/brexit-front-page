import React, { Component } from 'react';

import SectionMeta from './meta/meta';
import SectionContent from './content/content';
import SectionSources from './sources/sources';
import colspan from '../../../client/utils/colspan';

const classify = classes => classes
	.filter(className => className)
	.join(' ');

const getSelectedTitle = dynamicContent => dynamicContent.sources.find(s => s.uuid === dynamicContent.selected).title;

export default class extends Component {
	render () {
		//if no content, don't render the section
		if (!(this.props.content && this.props.content.main && this.props.content.main.length)) {
			return null;
		}
		const cols = this.props.cols;
		let trackable = this.props.trackable || this.props.id;
		if (this.props.dynamicContent && this.props.dynamicContent.selected !== 'initial') {
			trackable += ` | alternate-source | ${getSelectedTitle(this.props.dynamicContent)}`
		}
		const sectionClasses = classify([
			'o-grid-row',
			this.props.style ? 'section--' + this.props.style : ''
		]);
		const sectionContentClasses = classify([
			'section__column',
			'section__column--content',
			this.props.isTab ? 'o-tabs__tabpanel' : ''
		]);
		const sectionAsideClasses = classify([
			'section__column',
			'section__column--sidebar',
			this.props.sidebarComponent && this.props.sidebarComponent.isTab ? 'o-tabs__tabpanel' : '',
			this.props.sidebarComponent && this.props.sidebarComponent.hideUntilDesktop ? 'section__column--hide-until-l' : ''
		]);

		return (
			<section className={sectionClasses} data-trackable={trackable}>
				{
					cols.meta ?
						<div data-o-grid-colspan={colspan(cols.meta)} className="section__column section__column--meta">
							<SectionMeta title={this.props.title} date={this.props.date} />
						</div> :
						null
				}
				{
					this.props.dynamicContent ?
						<div data-o-grid-colspan="12" className="section__column section__column--sources">
							<SectionSources {...this.props.dynamicContent} />
						</div> :
						null
				}
				<div
					id={`${this.props.id}-section-content`}
					data-o-grid-colspan={colspan(cols.content)}
					className={sectionContentClasses}>
					<SectionContent
						id={this.props.id}
						style={this.props.style}
						layout={this.props.layout}
						items={this.props.content.main}
						flags={this.props.flags}
					/>
				</div>
				{
					cols.sidebar ?
						<aside
							id={`${this.props.id}-section-aside`}
							data-o-grid-colspan={colspan(cols.sidebar)}
							className={sectionAsideClasses}
							data-trackable={this.props.sidebarComponent.id}>
							<div>
								<this.props.sidebarComponent.component
									articles={this.props.content.sidebar ? this.props.content.sidebar : null}
									adClasses={this.props.sidebarComponent.adClasses} />
							</div>
						</aside> :
						null

				}
			</section>
		);
	}
}
