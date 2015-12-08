import React, {Component} from 'react';

class SectionSources extends Component {
	render () {

		console.log('this.props', this.props);
		return (
			<select>
				{this.props.altSources.map(function(source) {
            return <option value={source.uuid}>{source.title}</option>;
        })}
			</select>
		);
	}
}

export default SectionSources;
