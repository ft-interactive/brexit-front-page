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
		const renderComponents = (components, flags) => components.map((component, index) =>
			<component.type {...component} data={this.props.data} key={`column-child_${index}`} flags={flags} />
		);

		return (
			<div className={className} data-o-grid-colspan={colspanToString(this.props.colspan)}>
				{renderComponents(this.props.components, this.props.flags)}
			</div>
		);
	}
}
