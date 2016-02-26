import React, { Component } from 'react';

export default class extends Component {
	render () {
		if (!this.props.components) {
			return null;
		}
		const renderComponents = (components) => components.map((component, index) =>
			<component.type {...component} items={this.props.items} key={`row-child_${index}`} />
		);

		return (
			<div className="o-grid-row">
				{renderComponents(this.props.components)}
			</div>
		);
	}
}
