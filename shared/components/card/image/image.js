import React, { Component } from 'react';
import NImage from 'n-image';

/**
 * @param {string} url
 * @param {Object} sizes
 * @param {string} contentId
 * @param {boolean} [stick = false]
 */
export default class extends Component {
	render () {
		const attrs = {
			href: `/content/${this.props.contentId}`,
			'data-trackable': 'image'
		};
		const classes = ['card__image-link'];
		if (this.props.stick) {
			classes.push('card__image-link--stick');
		}
		attrs.className = classes.join(' ');

		const nImageAttrs = {
			picClass: 'card__picture card__picture--placeholder',
			imgClass: 'card__image',
			srcset: this.props.sizes,
			url: this.props.url
		};

		return (
			<a {...attrs}>
				<NImage {...nImageAttrs} />
			</a>
		);
	}
}
