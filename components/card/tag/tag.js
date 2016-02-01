import React, { Component } from 'react';

/**
 * @param {string} name
 * @param {string} url
 * @param {string} taxonomy
 */
export default class Tag extends Component {
	render () {
		return (
			<p className={`card__tag card__tag--${this.props.tag.taxonomy}`}>
				<a className="card__tag__link" href={this.props.tag.url} data-trackable="primary-tag">
					{this.props.tag.name}
				</a>
			</p>
		);
	}
}
