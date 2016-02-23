import React, { Component } from 'react';

import { responsiveValue } from './../../libs/helpers';
import Tag from './tag/tag'
import Title from './title/title'
import Standfirst from './standfirst/standfirst'
import Image from './image/image'
import Related from './related/related';
import LiveBlogGlow from './live-blog-glow/live-blog-glow';
import Timestamp from './timestamp/timestamp';

/**
 * @param {string} title
 * @param {string} id
 * @param {string} size
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
 */
export default class extends Component {
	render () {
		const attrs = {
			className: 'card',
			'data-trackable': 'card',
			'data-size': this.props.size
		};
		const tag = this.props.tag && Object.assign({}, this.props.tag);

		if (this.props.show) {
			attrs['data-show'] = responsiveValue(this.props.show);
		}

		if (this.props.image && this.props.image.position) {
			attrs['data-image-position'] = responsiveValue(this.props.image.position);
		}

		if (this.props.liveBlog) {
			attrs.className += ` card--liveblog liveblog--${this.props.liveBlog.status.toLowerCase()}`;
		}

		if (this.props.isMain) {
			attrs.className += ' card--main';

			if (tag) {
				tag.isFollowable = true;
			}

			if (this.props.related) {
				this.props.related.size = 'large';
			}
		}

		const articleContentClasses = [
			'card__content'
		];
		if (this.props.image) {
			articleContentClasses.push('card__content--has-image');
			if (this.props.image.stick || this.props.image.isHeadshot) {
				articleContentClasses.push('card__content--grow');
			}
		}

		if (this.props.isTransparent) {
			attrs.className += ` card--transparent`;
		}

		if (this.props.isPictureStory) {
			attrs.className += ` card--picture-story`;
		}

		return (
			<article {...attrs}>
				<div className={articleContentClasses.join(' ')}>
					<div className="card__content__inner">
						{this.props.liveBlog ? <span className="liveblog__badge">live</span> : null}
						{tag && this.props.size !== 'tiny' ? <Tag {...tag}/> : null}
						{this.props.image ? <Image {...this.props.image} contentId={this.props.id} /> : null}
						{tag && this.props.size === 'tiny' ? <Tag {...tag} /> : null}
						<Title title={this.props.title} url={`/content/${this.props.id}`} />
						{this.props.standfirst ? <Standfirst standfirst={this.props.standfirst} /> : null}
						{this.props.lastPublished ? <Timestamp date={this.props.lastPublished} /> : null}
					</div>
				</div>
				{this.props.related && this.props.related.items ? <Related {...this.props.related} /> : null}
				{this.props.liveBlog ? <LiveBlogGlow {...this.props.liveBlog} /> : null}
			</article>
		);
	}
}
