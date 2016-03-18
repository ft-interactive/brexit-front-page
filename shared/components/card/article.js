import React, { Component } from 'react';

import { responsiveValue } from './../../libs/helpers';
import Tag from './tag/tag';
import Title from './title/title';
import Standfirst from './standfirst/standfirst';
import Image from './image/image';
import Related from './related/related';
import LiveBlogGlow from './live-blog-glow/live-blog-glow';
import Timestamp from './timestamp/timestamp';
import Brand from './brand/brand';

/**
 * @param {string} title
 * @param {string} id
 * @param {string} size
 * @param {string} [type]
 * @param {string} [standfirst]
 * @param {object} [tag]
 * @param {string} tag.taxonomy
 * @param {string} tag.url
 * @param {string} tag.name
 * @param {Object[]} [related]
 * @param {string} related[].title
 * @param {string} related[].id
 * @param {Object} [image]
 * @param {string} image.url
 * @param {string} image.sizes
 * @param {string} [image.position]
 * @param {Object} [liveBlog]
 * @param {string} liveBlog.status
 * @param {Object} liveBlog.latestUpdate
 * @param {string} liveBlog.latestUpdate.date
 * @param {Object} [brand]
 * @param {string} brand.name
 * @param {string} [brand.url]
 * @param {string} [brand.headshot]
 */
export default class extends Component {
	render () {
		const article = this.props;
		const attrs = {
			className: 'card',
			'data-trackable': 'card',
			'data-size': article.size
		};
		const tag = article.tag && Object.assign({}, article.tag);

		if (article.show) {
			attrs['data-show'] = responsiveValue(article.show);
		}

		if (article.image && article.image.position) {
			attrs['data-image-position'] = responsiveValue(article.image.position);
		}

		if (article.liveBlog) {
			attrs.className += ` card--liveblog liveblog--${article.liveBlog.status.toLowerCase()}`;
		}

		if (article.type) {
			attrs.className += ` card--${article.type}`;
		}

		if (article.isMain) {
			attrs.className += ' card--main';

			if (tag) {
				tag.isFollowable = true;
			}

			if (article.related) {
				article.related.size = 'large';
			}
		}

		const articleContentClasses = [
			'card__content'
		];
		if (article.image) {
			articleContentClasses.push('card__content--has-image');
			if (article.image.stick) {
				articleContentClasses.push('card__content--grow');
			}
		}

		if (article.isTransparent) {
			attrs.className += ` card--transparent`;
		}

		if (article.isPictureStory) {
			attrs.className += ` card--picture-story`;
		}

		if (article.opinionHeader) {
			article.opinionHeader.size = article.size;
		}

		return (
			<article {...attrs}>
				<div className={articleContentClasses.join(' ')}>
					<div className="card__content__inner">
						{article.liveBlog ? <span className="liveblog__badge">live</span> : null}
						{tag && article.size !== 'tiny' ? <Tag {...tag}/> : null}
						{article.image ? <Image {...article.image} contentId={article.id} /> : null}
						{tag && article.size === 'tiny' ? <Tag {...tag} /> : null}
						{article.brand ? <Brand {...article.brand} /> : null}
						<Title title={article.title} url={`/content/${article.id}`} />
						{article.standfirst ? <Standfirst standfirst={article.standfirst} /> : null}
						{article.lastPublished ? <Timestamp date={article.lastPublished} /> : null}
					</div>
				</div>
				{article.related && article.related.items ? <Related {...article.related} /> : null}
				{article.liveBlog ? <LiveBlogGlow {...article.liveBlog} /> : null}
			</article>
		);
	}
}
