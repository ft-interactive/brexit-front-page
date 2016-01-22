import React, { Component } from 'react';

import Image from 'n-image';
import Follow from 'next-myft-ui/templates/follow';

class Concept extends Component {
	render () {
		const concept = this.props.item;
		const classes = ['card', 'card--concept'];
		if (concept.isFollowing) {
			classes.push('card--followed-concept');
		} else {
			classes.push('card--non-followed-concept');
		}
		const followAttrs = {
			conceptId: concept.id,
			name: concept.name,
			taxonomy: concept.taxonomy,
			classes: 'card__concept-follow'
		};
		if (!concept.isFollowing) {
			Object.assign(followAttrs, { variant: 'inverse', size: 'big' })
		}
		const articlesWithImage = concept.items.filter(article => article.primaryImage);
		const title = concept.isFollowing ?
			<a
				className="card__concept-title__link"
				href={concept.url}
				data-trackable="concept-link">{concept.name}</a> :
			concept.name;
		const imageAttrs = {
			imgClass: 'card__concept-image',
			srcset: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
		};
		if (!concept.isFollowing) {
			imageAttrs.imageServiceParams = { tint: 'FFF1E0' };
		}
		const image = articlesWithImage.length ?
			<Image url={articlesWithImage[0].primaryImage.rawSrc} {...imageAttrs} /> :
			null;
		const articles = concept.items.slice(0, 2).map(article => (
			<li className="card__concept-article" key={article.id}>
				<a
					className="card__concept-article__link"
					href={`/content/${article.id}` + (!concept.isFollowing ? `?tagToFollow=${concept.id}` : '')}
					data-trackable="article">{article.title}</a>
			</li>
		));

		return (
			<section className={classes.join(' ')} data-trackable="concept">
				<div className="card__concept-container">
					{image}
					<div className="card__concept-container__text">
						<h2 className="card__concept-title">{title}</h2>
						<Follow {...followAttrs} />
					</div>
				</div>
				<ol className="card__concept-articles" data-trackable="articles">
					{articles}
				</ol>
			</section>
		);
	}
}

export default Concept;
