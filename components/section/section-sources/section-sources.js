import React, {Component} from 'react';

class SectionSources extends Component {
	render () {

		return (
			<select className="n-util-hide-no-js" onChange={this.props.onChange}>
				{this.props.dynamicContent.sources.map(function(source) {
            return <option key={source.title} value={source.uuid}>{source.title}</option>;
        })}
			</select>
		);
	}
}

export default SectionSources;
