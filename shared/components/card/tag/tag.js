import React, { Component } from 'react';

/**
 * @param {string} name
 * @param {string} url
 * @param {string} taxonomy
 * @param {boolean} [isInline]
 */
export default class extends Component {
	render () {
		const classes = ['card__tag', `card__tag--${this.props.taxonomy}`];
		if (this.props.isInline) {
			classes.push('card__tag--inline');
		}
		return (
			<p className={classes.join(' ')}>
				<a className="card__tag__link" href={this.props.url} data-trackable="primary-tag">
					{this.props.name}
				</a>
			</p>
		);
	}
}
