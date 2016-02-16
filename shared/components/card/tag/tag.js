import React, { Component } from 'react';
import Follow from 'next-myft-ui/templates/follow';

/**
 * @param {string} id
 * @param {string} name
 * @param {string} url
 * @param {string} taxonomy
 * @param {boolean} [isFollowable]
 */
export default class extends Component {
	render () {
		const followAttrs = {
			conceptId: this.props.id,
			name: this.props.name,
			taxonomy: this.props.taxonomy,
			classes: 'card__tag__follow'
		};
		return (
			<div className="card__tag-wrapper">
				<p className={`card__tag card__tag--${this.props.taxonomy}`}>
					<a className="card__tag__link" href={this.props.url} data-trackable="primary-tag">
						{this.props.name}
					</a>
				</p>
				{this.props.isFollowable ? <Follow {...followAttrs} /> : null}
			</div>
		);
	}
}
