import React, {Component} from 'react';
import SectionMeta from './section-meta/section-meta';
import SectionContent from './section-content/section-content';

import colspan from '../../client/utils/colspan';

export default class Section extends Component {
	render () {
		const cols = this.props.cols;
		return (
			<section className={'section o-grid-container o-grid-container--compact section--' + this.props.style} data-trackable={this.props.id}>
				<div className="o-grid-row">
					{
						cols.meta ?
							<div data-o-grid-colspan={colspan(cols.meta)} className="section__column section__column--meta">
								<SectionMeta title={this.props.title} date={this.props.date} />
							</div>
							: null
					}
					<div data-o-grid-colspan={colspan(cols.content)} className="section__column section__column--content">
						<SectionContent
							style={this.props.style}
							columns={this.props.columns}
							cards={this.props.cards}
							items={this.props.content}
						/>
					</div>
					{
						cols.sidebar ?
							<aside data-o-grid-colspan={colspan(cols.sidebar)} className="section__column section__column--sidebar">
								<this.props.sidebarComponent articles={this.props.sidebarContent.items} />
								<div className="sidebar__ad-container"></div>
							</aside>
							: null
					}
				</div>
			</section>
		);
	}
}
