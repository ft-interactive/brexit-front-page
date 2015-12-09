import React, {Component} from 'react';

class SectionSources extends Component {
	render () {

		return (
			<select onChange={this.props.onChange}>
				{this.props.altSources.map(function(source) {
            return <option key={source.uuid} value={source.uuid}>{source.title}</option>;
        })}
			</select>
		);
	}
}

export default SectionSources;
