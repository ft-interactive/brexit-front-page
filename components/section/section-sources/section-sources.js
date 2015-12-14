import React, {Component} from 'react';

class SectionSources extends Component {
	render () {

		return (
			<div className="section-sources">
				<label className="section-sources__label">{this.props.dynamicContent.description}</label>
				<select className="section-sources__select n-util-hide-no-js" onChange={this.props.onChange} value={this.props.selectedSource}>
					{this.props.dynamicContent.sources.map(function(source) {
							return <option key={source.title} value={source.uuid}>{source.title}</option>;
					})}
				</select>
			</div>

		);
	}
}

export default SectionSources;
