import React, { Component } from 'react';
import NImage from 'n-image';

/**
 * @param {string} url
 * @param {Object} sizes
 * @param {string} contentId
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
		if (this.props.isHeadshot) {
			classes.push('card__image-link--headshot');
		}
		attrs.className = classes.join(' ');

		const nImageAttrs = {
			picClass: 'card__picture',
			imgClass: 'card__image',
			srcset: this.props.sizes
		};
		if (this.props.imageServiceUrl) {
			Object.assign(nImageAttrs, { url: this.props.imageServiceUrl, isImgServiceUrl: true });
		} else {
			nImageAttrs.url = this.props.url
		}

		return (
			<a {...attrs}>
				<NImage {...nImageAttrs} />
			</a>
		);
	}
}
