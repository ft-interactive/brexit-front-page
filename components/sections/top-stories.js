import React, {Component} from 'react';
import SectionMeta from '../section-meta/section-meta';
import TopStories from '../top-stories/top-stories';
import FastFt from '../fast-ft/fast-ft';

class SectionTopStories extends Component {
	render() {
		return (
			<section className="section o-grid-container">
				<div className="o-grid-row">
					<div data-o-grid-colspan="12 XL2">
						<SectionMeta title="Top Stories"/>
					</div>
					<div data-o-grid-colspan="12 L10 XL8">
						<TopStories articles={this.props.content.leads.concat(this.props.content.items)} />
					</div>
					<aside data-o-grid-colspan="hide L2">
						<FastFt articles={this.props.sidebarContent.items} />
					</aside>
				</div>
			</section>
		);
	}
}

export default SectionTopStories;
