import React, { Component } from 'react';

const getImage = (size, headshot) => {
	if (size === 'tiny') {
		return null;
	}
	return headshot ?
		<img
			className="card__opinion-header__image card__opinion-header__image--headshot"
			src={`${headshot}?source=next&fit=scale-down&compression=best&width=80`} /> :
		<img
			className="card__opinion-header__image"
			src="https://next-geebee.ft.com/image/v1/images/raw/http%3A%2F%2Fnext-geebee.ft.com%2Fassets%2Ficons%2Fquote.svg?source=next&format=svg&tint=f6e9d8,f6e9d8" />;
};

const getTitle = (title, size) => {
	if (size === 'tiny') {
		return 'Opinion';
	}
	if (size === 'small') {
		return title;
	}
	return [title.split(' ')[0], <br />, title.split(' ').slice(1).join(' ')];
}

/**
 * @param {string} title
 * @param {string} [size = medium]
 * @param {string} [headshot]
 * @param {string} [url]
 */
export default class extends Component {
	render () {
		const opinionHeader = this.props;
		const size = opinionHeader.size || 'medium';
		let classes = `card__opinion-header card__opinion-header--${size}`;
		if (opinionHeader.headshot) {
			classes += ' card__opinion-header--with-headshot';
		}
		return (
			<div className={classes} data-trackable="opinion-header">
				{getImage(size, opinionHeader.headshot)}
				<p className="card__opinion-header__title">
					{
						opinionHeader.url ?
							<a className="card__opinion-header__link" href={opinionHeader.url} data-trackable="link">
								{getTitle(opinionHeader.title, size)}
							</a> :
							getTitle(opinionHeader.title, size)
					}
				</p>
			</div>
		);

	}
}
