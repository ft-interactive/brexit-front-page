import React, { Component } from 'react';

import Image from 'n-image';
import Follow from 'next-myft-ui/templates/follow';

// generic images for this concept
const taxonomyImages = {
	authors: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	brand: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	organisations: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	people: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	regions: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	specialReports: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	topics: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	'default': 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2'
};

const getConceptImage = concept => {
	const conceptImage = concept.items
		.reduce((images, item) => {
			if (item.primaryImage) {
				images.push(item.primaryImage.rawSrc);
			}
			return images
		}, [])
		.shift();

	return conceptImage || taxonomyImages[concept.taxonomy] || taxonomyImages.default;
};

const createImageComponentAttrs = concept => {
	const attrs = {
		url: getConceptImage(concept),
		imgClass: 'card__concept-image',
		srcset: { default: 449, s: 659, m: 199, l: 259, xl: 322 }
	};
	if (!concept.isFollowing) {
		attrs.imageServiceParams = { tint: 'FFF1E0' };
	}

	return attrs;
};

const createFollowComponentAttrs = concept => {
	const attrs = {
		conceptId: concept.id,
		name: concept.name,
		taxonomy: concept.taxonomy,
		classes: 'card__concept-follow'
	};
	if (!concept.isFollowing) {
		Object.assign(attrs, { variant: 'inverse', size: 'big' })
	}

	return attrs;
};

class Concept extends Component {
	render () {
		const concept = this.props.item;
		const classes = ['card', 'card--concept'];
		if (concept.isFollowing) {
			classes.push('card--followed-concept');
		} else {
			classes.push('card--non-followed-concept');
		}
		const title = concept.isFollowing ?
			<a
				className="card__concept-title__link"
				href={concept.url}
				data-trackable="concept-link">{concept.name}</a> :
			concept.name;
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
					<Image {...createImageComponentAttrs(concept)} />
					<div className="card__concept-container__text">
						<h2 className="card__concept-title">{title}</h2>
						<Follow {...createFollowComponentAttrs(concept)} />
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
