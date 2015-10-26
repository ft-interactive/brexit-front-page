import React, {Component} from 'react';
import {responsiveClass} from '../helpers';

export default class Title extends Component {
	render () {
		return (
			<h2 className={'card__title ' + responsiveClass('card__title', this.props.size)}>
				<a className="card__title-link" href={this.props.href} data-trackable="link">{this.props.title}</a>
			</h2>
		);
	}
}
