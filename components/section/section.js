import React, {Component} from 'react';
import SectionMeta from './section-meta/section-meta';

const columnConfig = (hasSidebar) => {
	return hasSidebar ? ['12 XL2', '12 L10 XL8', 'hide L2'] : ['12 XL2', '12 XL10'];
}

export default class Section extends Component {
	render() {
		const columns = columnConfig(!!this.props.sidebarContent);

		return (
			<section className="section o-grid-container">
				<div className="o-grid-row">
					<div data-o-grid-colspan={columns[0]}>
						<SectionMeta title={this.props.title} date={this.props.date} />
					</div>
					<div data-o-grid-colspan={columns[1]}>
						<this.props.contentComponent articles={this.props.content} />
					</div>
					{
						columns[2] ?
						<aside data-o-grid-colspan={columns[2]}>
							<this.props.sidebarComponent articles={this.props.sidebarContent.items} />
						</aside>
						: null
					}
				</div>
			</section>
		);
	}
}
