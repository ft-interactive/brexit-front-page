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
		const imageSrc = this.props.hasHeadshot ?
			`${article.branding.headshot}?${qs.stringify(imageOptions)}` :
			article.primaryImage.src;
		const stickToBottom = this.props.hasHeadshot ?
			'card__image-link--stick' :
			responsiveClass('card__image-link', objMap(this.props.stickToBottom, (it) => it ? 'stick' : 'nostick'));

		return (
			<a className={'card__image-link ' + stickToBottom} data-image-show={responsiveValue(this.props.show)} href={'/content/' + article.id} data-trackable="image">
				<img className='card__image' src={imageSrc} />
			</a>
		);
	}
}
