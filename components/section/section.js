import React, {Component} from 'react';
import SectionMeta from './section-meta/section-meta';
import SectionContent from './section-content/section-content';

const columnConfig = (hasSidebar) => {
	return hasSidebar ? ['12 XL2', '12 L10 XL8', '12 L2'] : ['12 XL2', '12 XL10'];
}

export default class Section extends Component {
	render () {
		const columns = columnConfig(!!this.props.sidebarContent);

		return (
			<section className={'section o-grid-container section--' + this.props.style} data-trackable={this.props.id}>
				<div className="o-grid-row">
					<div data-o-grid-colspan={columns[0]} className="section__column section__column--meta">
						<SectionMeta title={this.props.title} date={this.props.date} />
					</div>
					<div data-o-grid-colspan={columns[1]} className="section__column section__column--content">
						<SectionContent
							style={this.props.style}
							columns={this.props.columns}
							cards={this.props.cards}
							items={this.props.content}
						/>
					</div>
					{
						columns[2] ?
						<aside data-o-grid-colspan={columns[2]} className="section__column section__column--sidebar">
							<this.props.sidebarComponent articles={this.props.sidebarContent.items} />
						</aside>
						: null
					}
				</div>
			</section>
		);
	}
}
