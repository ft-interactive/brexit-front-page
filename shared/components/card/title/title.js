import React, {Component} from 'react';

/**
 * @param {string} title
 * @param {string} url
 */
export default class Title extends Component {
	render () {
		return (
			<h2 className="card__title">
				<a className="card__title-link" href={this.props.url} data-trackable="main-link">
					{this.props.title.trim()}
				</a>
			</h2>
		);
	}
}
