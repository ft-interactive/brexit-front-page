import React, { Component } from 'react';

/**
 * @param {string} title
 * @param {string} [headshot]
 * @param {string} [url]
 */
export default class extends Component {
	render () {
		const opinionHeader = this.props;

		return (
			<div className="card__opinion-header" data-trackable="opinion-header">
				{
					opinionHeader.headshot ?
						<img
							className="card__opinion-header__image card__opinion-header__image--headshot"
							src={`${opinionHeader.headshot}?source=next&fit=scale-down&compression=best&width=80`} /> :
						<img
							className="card__opinion-header__image"
							src="https://next-geebee.ft.com/image/v1/images/raw/http%3A%2F%2Fnext-geebee.ft.com%2Fassets%2Ficons%2Fquote.svg?source=next&format=svg&tint=f6e9d8,f6e9d8" />
				}
				<p className="card__opinion-header__title">
					{
						opinionHeader.url ?
							<a className="card__opinion-header__link" href={opinionHeader.url} data-trackable="link">
								{opinionHeader.title.split(' ')[0]}
								<br />
								{opinionHeader.title.split(' ').slice(1)}
							</a> :
							opinionHeader.title
					}
				</p>
			</div>
		);
	}
}
