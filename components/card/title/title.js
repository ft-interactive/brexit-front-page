import React, {Component} from 'react';
import {responsiveValue} from '../helpers';
import { layoutNames } from '../../layout/engine';

export default class Title extends Component {
	render () {
		// need to have a size for all layout values, so need to fill it out up to XL
		layoutNames.reduce((largestValue, layoutName) => {
			if (!this.props.size[layoutName]) {
				return this.props.size[layoutName] = largestValue;
			} else {
				return this.props.size[layoutName];
			}
		}, this.props.size.default);

		return (
			<h2 className="card__title" data-size={responsiveValue(this.props.size, true)}>
				<a className="card__title-link" href={this.props.href} data-trackable="main-link">{this.props.title}</a>
			</h2>
		);
	}
}
