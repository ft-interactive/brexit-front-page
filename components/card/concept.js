import React, { Component } from 'react';

import Follow from 'next-myft-ui/templates/follow';

class Concept extends Component {
	render () {
		const concept = this.props.item;
		const articlesWithImage = concept.items.filter(article => article.primaryImage);
		const image = articlesWithImage.length ?
			<img className="topic-card__image" src={'//next-geebee.ft.com/image/v1/images/raw/' + articlesWithImage[0].primaryImage.rawSrc + '?source=next&fit=scale-down&width=400'} /> :
			null;
		const articles = concept.items.slice(0, 3).map(article => (
			<li className="topic-card__article" key={article.id}>
				<a className="topic-card__article-link" href={'/content/' + article.id} data-trackable="article">{article.title}</a>
			</li>
		));

		return (
			<section className="topic-card" data-trackable="topic">
				<div className="topic-card__topic-container">
					<h2 className="topic-card__title">{concept.name}</h2>
					<Follow conceptId={concept.id} name={concept.name} taxonomy={concept.taxonomy} />
					{image}
				</div>
				<ol className="topic-card__articles" data-trackable="articles">
					{articles}
				</ol>
			</section>
		);
	}
}

export default Concept;
