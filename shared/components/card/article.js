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
 * @param {string} [tag]
 * @param {Object[]} [related]
 * @param {string} related[].title
 * @param {string} related[].id
 * @param {Object} [image]
 * @param {string} image.url
 * @param {string} image.sizes
 * @param {string} [image.show]
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

		if (this.props.show) {
			attrs['data-show'] = responsiveValue(this.props.show);
		}

		if (this.props.image) {
			if (this.props.image.show) {
				attrs['data-image-show'] = responsiveValue(this.props.image.show);
			}
			if (this.props.image.position) {
				attrs['data-image-position'] = responsiveValue(this.props.image.position);
			}
		}

		if (this.props.liveBlog) {
			attrs.className += ` card--liveblog liveblog--${this.props.liveBlog.status.toLowerCase()}`;
		}

		if (this.props.tag && this.props.size === 'tiny') {
			this.props.tag.isInline = true;
		}

		const imageZoneElements = [
			this.props.image ? <Image {...this.props.image} contentId={this.props.id} key={this.props.image.url} /> : null,
			this.props.tag && this.props.size === 'tiny' ? <Tag {...this.props.tag} key={this.props.tag.id} /> : null,
			<Title title={this.props.title} url={`/content/${this.props.id}`} key={`${this.props.id}:title`} />,
			this.props.standfirst ? <Standfirst standfirst={this.props.standfirst} key={`${this.props.id}:standfirst`} /> : null,
			this.props.lastPublished ? <Timestamp date={this.props.lastPublished} key={this.props.lastPublished} /> : null
		];

		return (
			<article {...attrs}>
				{this.props.liveBlog ? <span className="liveblog__badge">live</span> : null}
				{this.props.tag && this.props.size !== 'tiny' ? <Tag {...this.props.tag}/> : null}
				{this.props.image ?
					<div className={`card__image-zone${(this.props.image.stick || this.props.image.isHeadshot) ? ' card__image-zone--grow' : ''}`}>
						<div className="card__image-zone__inner">
							{imageZoneElements}
						</div>
					</div> :
					<div>
						{imageZoneElements}
					</div>
				}
				{this.props.related ? <Related items={this.props.related} /> : null}
				{this.props.liveBlog ? <LiveBlogGlow {...this.props.liveBlog} /> : null}
			</article>
		);
	}
}
