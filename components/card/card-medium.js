/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardMedium extends Component {
	render() {
		const article = this.props.article;
		const image = article.primaryImage ? <img className="card__image" src={article.primaryImage.src} /> : '';
		return (
			<article className="card card--medium" data-trackable="card">
				<a className="card__tag" href={article.primaryTag.url} data-trackable="tag">{article.primaryTag.name}</a>
				<a className="card__title-link" href={'/content/' + article.id} data-trackable="link">
					<h2 className="card__title">{article.title}</h2>
				</a>
				<p className="card__standfirst">{article.summary}</p>
				<a className="card__image-link" href={'/content/' + article.id} data-trackable="image">
					{image}
				</a>
			</article>
		);
	}
}

export default CardMedium;
