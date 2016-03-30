import React, { Component } from 'react';

import colspanToString from '../../../client/utils/colspan';
import { renderClasses } from '../../libs/helpers';

export default class extends Component {
	render () {
		if (!this.props.components) {
			return null;
		}
		const classes = {
			column: true,
			'column--related': this.props.isRelated
		};

		const renderComponents = (components, { flags = {} }) => components.map((component, index) =>
			<component.type {...component} data={this.props.data} key={`column-child_${index}`} flags={flags} />
		);

		return (
			<div className={renderClasses(classes)} data-o-grid-colspan={colspanToString(this.props.colspan)}>
				{renderComponents(this.props.components, { flags: this.props.flags })}
			</div>
		);
	}
}
