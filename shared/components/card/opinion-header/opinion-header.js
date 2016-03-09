import React, { Component } from 'react';

const getImage = headshot =>
	headshot ?
		<img
			className="card__opinion-header__image card__opinion-header__image--headshot"
			src={`${headshot}?source=next&fit=scale-down&compression=best&width=60`} /> :
		<img
			className="card__opinion-header__image"
			src="https://next-geebee.ft.com/image/v1/images/raw/http%3A%2F%2Fnext-geebee.ft.com%2Fassets%2Ficons%2Fquote.svg?source=next&format=svg&tint=f6e9d8,f6e9d8" />;

/**
 * @param {string} title
 * @param {string} url
 * @param {string} [size = small]
 * @param {string} [headshot]
 */
export default class extends Component {
	render () {
		const opinionHeader = this.props;
		const size = opinionHeader.size || 'small';
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
