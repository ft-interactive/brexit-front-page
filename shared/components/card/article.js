import React, { Component } from 'react';

import { responsiveValue } from './../../libs/helpers';
import Tag from './tag/tag'
import Title from './title/title'
import Standfirst from './standfirst/standfirst'
import Image from './image/image'
import Related from './related/related';
import LiveBlogGlow from './live-blog-glow/live-blog-glow';

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
 * @param {string} image.srcSet
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

		return (
			<article {...attrs}>
				<div>
					{this.props.liveBlog ? <span className="liveblog__badge">live</span> : null}
					{this.props.tag ? <Tag tag={this.props.tag}/> : null}
					<Title title={this.props.title} url={`/content/${this.props.id}`} />
				</div>
				{this.props.standfirst ? <Standfirst standfirst={this.props.standfirst} /> : null}
				{this.props.image ? <Image {...this.props.image} contentId={this.props.id} /> : null}
				{this.props.related ? <Related items={this.props.related} /> : null}
				{this.props.liveBlog ? <LiveBlogGlow {...this.props.liveBlog} /> : null}
			</article>
		);
	}
}