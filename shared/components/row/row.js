import React, { Component } from 'react';

export default class extends Component {
	render () {
		if (!this.props.components) {
			return null;
		}
		const renderComponents = (components, { flags = {} }) => components.map((component, index) =>
			<component.type {...component} data={this.props.data} key={`row-child_${index}`} flags={flags} />
		);

		return (
			<div className="o-grid-row">
				{renderComponents(this.props.components, { flags: this.props.flags })}
			</div>
		);
	}
}
