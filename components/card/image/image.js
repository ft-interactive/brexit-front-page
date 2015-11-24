import qs from 'querystring';

import React, {Component} from 'react';
import {responsiveValue} from '../helpers';

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
		const imageSrc = (article.branding && article.branding.taxonomy === 'authors' && article.branding.headshot) ?
			`${article.branding.headshot}?${qs.stringify(imageOptions)}` :
			article.primaryImage.src;

		return (
			<a className="card__image-link" data-image-show={responsiveValue(this.props.show)} href={'/content/' + article.id} data-trackable="image">
				<img className='card__image' src={imageSrc} />
			</a>
		);
	}
}
