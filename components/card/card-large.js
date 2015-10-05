/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardLarge extends Component {
	render() {
		const article = this.props.article;
		const imageEl = article.primaryImage ? <img className="card__image" src={article.primaryImage.src} /> : '';
		const relatedEls = article.relatedContent.map(related => (
			<li className="card__related-item">
				<a href={'/content/' + related.id} data-trackable="related">{related.title}</a>
			</li>
		));
		return (
			<article className="card card--large" data-trackable="card">
				<a className="card__tag" href={article.primaryTag.url} data-trackable="tag">{article.primaryTag.name}</a>
				<a className="card__title-link" href={'/content/' + article.id} data-trackable="link">
					<h2 className="card__title">{article.title}</h2>
				</a>
				<p className="card__standfirst">{article.summary}</p>
				<a className="card__image-link" href={'/content/' + article.id} data-trackable="image">
					{imageEl}
				</a>
				<ol className="card__related-items">
					{relatedEls}
				</ol>
			</article>
		);
	}
}

export default CardLarge;
