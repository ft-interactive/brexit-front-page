import React, {Component} from 'react';

class Row extends Component {

	render () {

		const renderComponents = (components) => components.map((component, index) => <component.type {...component} key={'row-child_' + index} />);

		return (
			<div className="o-grid-row">
				{renderComponents(this.props.components)}
			</div>
		);
	}
}

export default Row;
