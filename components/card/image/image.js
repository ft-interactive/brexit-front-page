import qs from 'querystring';

import React, {Component} from 'react';
import {objMap, responsiveClass} from '../helpers';
import NImage from '../../../bower_components/n-image/templates/image'

const imageOptions = {
	source: 'next',
	fit: 'scale-down',
	compression: 'best',
	format: 'png',
	quality: 'highest'
};

export default class Image extends Component {
 	render () {
		const article = this.props.article;
		const hasHeadshot = article.branding && article.branding.taxonomy === 'authors' && article.branding.headshot;
		const picClass = "card__picture";
		const imgClass = "card__image";

		const srcset = Object.assign({}, this.props.srcSet);
		if(hasHeadshot) {
			for(var key in srcset) {
				if(srcset.hasOwnProperty(key)) {
					srcset[key] = Math.ceil((srcset[key] / 100) * 60);
				}
			}
		}

		const url =	hasHeadshot
					?	`${article.branding.headshot}?${qs.stringify(imageOptions)}&width=`
					:	`https:\/\/next-geebee.ft.com/image/v1/images/raw/` +
						`${encodeURIComponent(article.primaryImage.rawSrc)}` +
						`?${qs.stringify(imageOptions)}&width=`

		const classes = [
			'card__image-link',
			hasHeadshot ? 'card__image-link--headshot' : ''
		]
		.concat(responsiveClass('card__image-link', objMap(this.props.stickToBottom, (it) => it ? 'stick' : 'nostick')))
		.filter(className => className)
		.join(' ');

		return (
			<a className={classes} href={'/content/' + article.id} data-trackable="image">
				<NImage picClass={picClass} imgClass={imgClass} srcset={srcset} url={url}/>
			</a>
		);
	}
}
