import React, {Component} from 'react';
import SectionMeta from './section-meta/section-meta';

export default class Section extends Component {
	render() {
		return (
			<section className="section o-grid-container">
				<div className="o-grid-row">
					<div data-o-grid-colspan={this.props.columns[0]}>
						<SectionMeta title={this.props.title} date={this.props.date} />
					</div>
					<div data-o-grid-colspan={this.props.columns[1]}>
						<this.props.contentComponent articles={this.props.content} />
					</div>
					{
						this.props.columns[2] ?
						<aside data-o-grid-colspan={this.props.columns[2]}>
							<this.props.sidebarComponent articles={this.props.sidebarContent.items} />
						</aside>
						: null
					}
				</div>
			</section>
		);
	}
}
