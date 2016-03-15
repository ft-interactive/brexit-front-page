import React, { Component } from 'react';
import Image from 'n-image';
import Follow from 'next-myft-ui/templates/follow';

import { responsiveValue } from './../../libs/helpers';

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

const getConceptImage = (taxonomy, items) => {
	const conceptImage = items
		.reduce((images, item) => {
			if (item.primaryImage && !item.isPodcast) {
				images.push(item.primaryImage.rawSrc);
			}
			return images
		}, [])
		.shift();

	return conceptImage || taxonomyImages[taxonomy] || taxonomyImages.default;
};

const createImageComponentAttrs = (taxonomy, items, isFollowing) => {
	const attrs = {
		url: getConceptImage(taxonomy, items),
		imgClass: 'card__concept-image',
		srcset: { default: 449, s: 659, m: 277, l: 259, xl: 322 }
	};
	if (!isFollowing) {
		attrs.imageServiceParams = {
			tint: 'FFF1E0'
		};
	} else {
		Object.assign(attrs, {
			picClass: 'card__picture card__picture--placeholder',
			imgClass: 'card__image'
		});
	}

	return attrs;
};

const createFollowComponentAttrs = (id, name, taxonomy, isFollowing) => {
	const attrs = {
		conceptId: id,
		name: name,
		taxonomy: taxonomy,
		classes: 'card__concept-follow'
	};
	if (!isFollowing) {
		Object.assign(attrs, { variant: 'inverse', size: 'big' })
	}

	return attrs;
};

/**
 * @param {string} id
 * @param {string} name
 * @param {string} taxonomy
 * @param {string} url
 * @param {bolean} [isFollowing=false]
 * @param {Object[]} items
 * @param {string} items.id
 * @param {string} items.title
 * @param {Object} [items.primaryImage]
 * @param {string} items.primaryImage.rawSrc
 */
export default class extends Component {
	render () {
		const classes = ['card', 'card--concept'];
		if (this.props.isFollowing) {
			classes.push('card--followed-concept');
		} else {
			classes.push('card--non-followed-concept');
		}
		if (this.props.isTransparent) {
			classes.push('card--transparent');
		}
		const attrs = {
			className: classes.join(' '),
			'data-trackable': 'concept'
		};
		if (this.props.show) {
			attrs['data-show'] = responsiveValue(this.props.show);
		}
		const title = this.props.isFollowing ?
			<a
				className="card__concept-title__link"
				href={this.props.url}
				data-trackable="concept-link">{this.props.name}</a> :
			this.props.name;
		const articles = this.props.items.slice(0, 2).map(article => (
			<li className="card__concept-article" key={article.id}>
				<a
					className="card__concept-article__link"
					href={`/content/${article.id}` + (!this.props.isFollowing ? `?tagToFollow=${this.props.id}` : '')}
					data-trackable="article">{article.title}</a>
			</li>
		));

		return (
			<section {...attrs}>
				<div>
					<div className="card__concept-container">
						<Image {...createImageComponentAttrs(
							this.props.taxonomy,
							this.props.items,
							this.props.isFollowing
						)} />
						<div className="card__concept-container__text">
							<h2 className="card__concept-title">{title}</h2>
							<Follow {...createFollowComponentAttrs(
								this.props.id,
								this.props.name,
								this.props.taxonomy,
								this.props.isFollowing
							)} />
						</div>
					</div>
					<ol className="card__concept-articles" data-trackable="articles">
						{articles}
					</ol>
				</div>
			</section>
		);
	}
}
