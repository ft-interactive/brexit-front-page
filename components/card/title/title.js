import React, {Component} from 'react';
import {responsiveValue} from '../helpers';

export default class Title extends Component {
	render () {
		console.log(this.props.size);
		return (
			<h2 className="card__title" data-size={responsiveValue(this.props.size, true)}>
				<a className="card__title-link" href={this.props.href} data-trackable="main-link">{this.props.title}</a>
			</h2>
		);
	}
}
