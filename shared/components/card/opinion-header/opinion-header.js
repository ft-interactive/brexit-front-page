import React, { Component } from 'react';

const headshotSize = 60;

const getImage = headshot =>
	headshot ?
		<img
			className="card__opinion-header__image card__opinion-header__image--headshot"
			width={headshotSize}
			height={headshotSize}
			src={`${headshot}?source=next&fit=scale-down&compression=best&width=${headshotSize}`} /> :
		<div className="card__opinion-header__image">
			<div className="card__opinion-header__quote card__opinion-header__quote--left" />
			<div className="card__opinion-header__quote card__opinion-header__quote--right" />
		</div>;

/**
 * @param {string} title
 * @param {string} url
 * @param {string} [size = small]
 * @param {string} [headshot]
 */
export default class extends Component {
	render () {
		const opinionHeader = this.props;
		const size = opinionHeader.size || 'tiny';
		let classes = `card__opinion-header card__opinion-header--${size}`;
		if (opinionHeader.headshot) {
			classes += ' card__opinion-header--with-headshot';
		}
		return (
			<div className={classes} data-trackable="opinion-header">
				{getImage(opinionHeader.headshot)}
				<p className="card__opinion-header__title">
					<a className="card__opinion-header__link" href={opinionHeader.url} data-trackable="link">
						{opinionHeader.title}
					</a>
				</p>
			</div>
		);

	}
}
