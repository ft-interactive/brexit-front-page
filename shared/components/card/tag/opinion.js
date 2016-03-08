import React, { Component } from 'react';
import Follow from 'next-myft-ui/templates/follow';

/**
 * @param {string} id
 * @param {string} name
 * @param {string} url
 * @param {string} taxonomy
 * @param {Object} author
 * @param {string} author.name
 * @param {string} author.id
 * @param {string} [author.headshot]
 * @param {boolean} [isFollowable]
 */
export default class extends Component {
	render () {
		const tag = this.props;
		return (
			<div className="card__tag-wrapper">
				<p className={`card__tag card__tag--${tag.taxonomy}`}>
					<a className="card__tag__link" href={tag.url} data-trackable="primary-tag">
						{tag.name}
					</a>
				</p>
				{
					tag.isFollowable ?
						<Follow conceptId={tag.id} name={tag.name} taxonomy={tag.taxonomy} classes="card__tag__follow" /> :
						null
				}
			</div>
		);
	}
}
