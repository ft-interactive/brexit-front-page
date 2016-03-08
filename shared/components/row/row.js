import React, { Component } from 'react';

export default class extends Component {
	render () {
		if (!this.props.components) {
			return null;
		}
		const renderComponents = (components, { flags = {} }) => components.map((component, index) =>
			<component.type {...component} items={this.props.items} key={`row-child_${index}`} flags={flags} />
		);

		return (
			<div className="o-grid-row">
				{renderComponents(this.props.components, { flags: this.props.flags })}
			</div>
		);
	}
}
