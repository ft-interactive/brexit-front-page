import React, { Component } from 'react';

class Concept extends Component {
	render () {
		const concept = this.props.item;
		const articlesWithImage = concept.items.filter(article => article.primaryImage);
		const image = articlesWithImage.length ?
			<img className="topic-card__image" src={'//next-geebee.ft.com/image/v1/images/raw/' + articlesWithImage[0].primaryImage.rawSrc + '?source=next&fit=scale-down&width=400'} /> :
			null;
		const articles = concept.items.slice(0, 2).map(article => (
			<li className="topic-card__article" key={article.id}>
				<a className="topic-card__article-link" href={'/content/' + article.id} data-trackable="article">{article.title}</a>
			</li>
		));

		return (
			<section className="topic-card" data-trackable="topic">
				<h2 className="topic-card__title">
					<a className="topic-card__title-link" href={concept.url} data-trackable="title">{concept.name}</a>
				</h2>
				{image}
				<ol className="topic-card__articles" data-trackable="articles">
					{articles}
				</ol>
			</section>
		);
	}
}

export default Concept;
