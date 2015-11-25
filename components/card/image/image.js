import qs from 'querystring';

import React, {Component} from 'react';
import {objMap, responsiveValue, responsiveClass} from '../helpers';

const imageOptions = {
	source: 'next',
	fit: 'scale-down',
	width: 265,
	compression: 'best',
	format: 'png',
	quality: 'highest',
	dpr: 2
};

export default class Image extends Component {
	render () {
		const article = this.props.article;
		const hasHeadshot = article.branding && article.branding.taxonomy === 'authors' && article.branding.headshot;
		const imageSrc = hasHeadshot ? `${article.branding.headshot}?${qs.stringify(imageOptions)}` : article.primaryImage.src;
		const classes = [
				'card__image-link',
				hasHeadshot ? 'card__image-link--headshot' : ''
			]
			.concat(responsiveClass('card__image-link', objMap(this.props.stickToBottom, (it) => it ? 'stick' : 'nostick')))
			.filter(className => className)
			.join(' ');

		return (
			<a className={classes} data-image-show={responsiveValue(this.props.show)} href={'/content/' + article.id} data-trackable="image">
				<img className='card__image' src={imageSrc} />
			</a>
		);
	}
}
