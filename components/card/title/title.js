import React, {Component} from 'react';

export default class Title extends Component {
	render () {
		return (
			<h2 className={'card__title card__title--' + this.props.size}>
				<a className="card__title-link" href={this.props.href} data-trackable="link">{this.props.title}</a>
			</h2>
		);
	}
}
