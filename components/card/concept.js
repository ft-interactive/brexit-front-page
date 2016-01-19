import React, { Component } from 'react';

import Follow from 'next-myft-ui/templates/follow';

class Concept extends Component {
	render () {
		const concept = this.props.item;
		const articlesWithImage = concept.items.filter(article => article.primaryImage);
		const image = articlesWithImage.length ?
			<img className="card__topic-image" src={'//next-geebee.ft.com/image/v1/images/raw/' + articlesWithImage[0].primaryImage.rawSrc + '?source=next&fit=scale-down&width=400'} /> :
			null;
		const articles = concept.items.slice(0, 3).map(article => (
			<li className="card__topic-article" key={article.id}>
				<a className="card__topic-article-link" href={'/content/' + article.id} data-trackable="article">{article.title}</a>
			</li>
		));

		return (
			<section className="card card--topic" data-trackable="topic">
				<div className="card__topic-container">
					<div className="card__topic-container__text">
						<h2 className="card__topic-title">{concept.name}</h2>
						<Follow
							conceptId={concept.id}
							name={concept.name}
							taxonomy={concept.taxonomy}
							variant="inverse"
							size="big"
							classes="card__topic-follow" />
					</div>
					{image}
				</div>
				<ol className="card__topic-articles" data-trackable="articles">
					{articles}
				</ol>
			</section>
		);
	}
}

export default Concept;
