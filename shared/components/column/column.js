import React, { Component } from 'react';

import colspanToString from '../../../client/utils/colspan';

export default class extends Component {
	render () {
		if (!this.props.components) {
			return null;
		}
		let className = 'column';
		if (this.props.isList) {
			className += ` column--list`;
		}
		const renderComponents = (components) => components.map((component, index) =>
			<component.type {...component} items={this.props.items} key={`column-child_${index}`} />
		);

		return (
			<div className={className} data-o-grid-colspan={colspanToString(this.props.colspan)}>
				{renderComponents(this.props.components)}
			</div>
		);
	}
}
