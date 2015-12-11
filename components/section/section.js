import React, {Component} from 'react';
import SectionMeta from './section-meta/section-meta';
import SectionContent from './section-content/section-content';
import SectionSources from './section-sources/section-sources';

const fetchres = require('fetchres');

import colspan from '../../client/utils/colspan';

const classify = classes => classes
	.filter(className => className)
	.join(' ');

export default class Section extends Component {

 	constructor(props) {
 		super(props);
 		this.state = { content: props.content };
 	}

	loadContent(e) {
		const uuid = e.target.value;
		if(uuid === 'initial') {
			this.setState({content: this.props.content})
		} else {
			fetch('https://next-graphql-api.ft.com/data?query=' + encodeURIComponent(this.props.dynamicContent.query(uuid)), {
				credentials: 'include'
			})
			.then(fetchres.json)
			.then((data) => {
				this.setState({content: this.props.dynamicContent.parseResults(data)})
			});
		}

	}


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
				data-trackable={this.props.id}>
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
								data-o-grid-colspan="12 S6 M4 XL3"
								className="section__column section__column--sources">
								<SectionSources dynamicContent={this.props.dynamicContent} onChange={this.loadContent.bind(this)}/>
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
