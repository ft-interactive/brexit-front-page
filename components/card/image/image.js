import React, {Component} from 'react';

export default class Image extends Component {
	render() {
		const article = this.props.article;
		return (
			<a className="card__image-link" href={'/content/' + article.id} data-trackable="image">
				<img className={'card__image card__image ' + this.props.size} src={article.primaryImage.src} />
			</a>
		);
	}
}
