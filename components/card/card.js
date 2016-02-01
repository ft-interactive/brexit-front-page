import React, { Component } from 'react';

import { responsiveValue } from './helpers';
import Tag from './tag/tag'
import Title from './title/title'
import Standfirst from './standfirst/standfirst'
import Image from './image/image'
import Related from './related/related';

/**
 * @param {string} title
 * @param {string} id
 * @param {string} size
 * @param {string} [standfirst]
 * @param {string} [tag]
 * @param {Object[]} [related]
 * @param {string} [related[].title]
 * @param {string} [related[].id]
 * @param {Object[]} [image]
 * @param {string} image[].url
 * @param {string} [image[].show]
 * @param {string} [image[].position]
 * @param {string} image[].srcSet
 */
class Card extends Component {
	render () {
		const attrs = {
			className: 'card',
			'data-trackable': 'card',
			'data-size': this.props.size
		};
		if (this.props.show) {
			attrs['data-show'] = responsiveValue(this.props.show);
		}
		if (this.props.image && this.props.image.show) {
			attrs['data-image-show'] = responsiveValue(this.props.image.show);
		}

		return (
			<article {...attrs}>
				<div>
					{this.props.tag ? <Tag tag={this.props.tag}/> : null}
					<Title title={this.props.title} url={`/content/${this.props.id}`} />
				</div>
				{this.props.standfirst ? <Standfirst standfirst={this.props.standfirst} /> : null}
				{this.props.image ? <Image {...this.props.image} contentId={this.props.id} /> : null}
				{this.props.related ? <Related items={this.props.related} /> : null}
			</article>
		);
	}
}

export default Card;
