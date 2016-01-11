import React, {Component} from 'react';

export default class Title extends Component {
	render () {
		return (
			<h2 className="card__title">
				<a className="card__title-link" href={this.props.href} data-trackable="main-link">{this.props.title}</a>
			</h2>
		);
	}
}
