import React, { Component } from 'react';

import Image from 'n-image';
import Follow from 'next-myft-ui/templates/follow';

class Concept extends Component {
	render () {
		const concept = this.props.item;
		const articlesWithImage = concept.items.filter(article => article.primaryImage);
		const image = articlesWithImage.length ?
			<Image
				imgClass="card__concept-image"
				srcset={{ default: 449, s: 659, m: 199, l: 259, xl: 322 }}
				url={articlesWithImage[0].primaryImage.rawSrc} /> :
			null;
		const articles = concept.items.slice(0, 3).map(article => (
			<li className="card__concept-article" key={article.id}>
				<a className="card__concept-article-link" href={'/content/' + article.id} data-trackable="article">{article.title}</a>
			</li>
		));

		return (
			<section className="card card--concept" data-trackable="topic">
				<div className="card__concept-container">
					<div className="card__concept-container__text">
						<h2 className="card__concept-title">{concept.name}</h2>
						<Follow
							conceptId={concept.id}
							name={concept.name}
							taxonomy={concept.taxonomy}
							variant="inverse"
							size="big"
							classes="card__concept-follow" />
					</div>
					{image}
				</div>
				<ol className="card__concept-articles" data-trackable="articles">
					{articles}
				</ol>
			</section>
		);
	}
}

export default Concept;
