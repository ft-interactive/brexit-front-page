import React, { Component } from 'react';

const headshotSize = 60;

const getImage = headshot =>
	headshot ?
		<img
			className="card__brand__image card__brand__image--headshot"
			width={headshotSize}
			height={headshotSize}
			src={`${headshot}?source=next&fit=scale-down&compression=best&width=${headshotSize}`} /> :
		<div className="card__brand__image">
			<div className="card__brand__quote card__brand__quote--left" />
			<div className="card__brand__quote card__brand__quote--right" />
		</div>;

/**
 * @param {string} title
 * @param {string} url
 * @param {string} [size = small]
 * @param {string} [headshot]
 */
export default class extends Component {
	render () {
		const brand = this.props;
		const size = brand.size || 'tiny';
		let classes = `card__brand card__brand--${size}`;
		if (brand.headshot) {
			classes += ' card__brand--with-headshot';
		}
		return (
			<div className={classes} data-trackable="brand">
				{getImage(brand.headshot)}
				<p className="card__brand__title">
					<a className="card__brand__link" href={brand.url} data-trackable="link">
						{brand.title}
					</a>
				</p>
			</div>
		);

	}
}
