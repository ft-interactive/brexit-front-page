import React, { Component } from 'react';

export default class extends Component {
	render () {
		const author = this.props;

		return (
			<div className="card__author">
				{
					author.headshot ?
						<img className="card__author__image" src={`${author.headshot}?source=next&fit=scale-down&compression=best&width=80`} /> :
						null
				}
				<p className="card__author__name">
					<a className="card__author__link" href={`/stream/authorsId/${author.id}`} data-trackable="author">
						{author.name}
					</a>
				</p>
			</div>
		);
	}
}
