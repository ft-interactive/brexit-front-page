import React, {Component} from 'react';
import {objMap, responsiveClass} from '../helpers';
import NImage from 'n-image';

export default class Image extends Component {
	render () {
		const article = this.props.article;
		const hasHeadshot = article.branding && article.branding.taxonomy === 'authors' && article.branding.headshot;
		const url = hasHeadshot ? article.branding.headshot : article.primaryImage.rawSrc;
		const isImgServiceUrl = hasHeadshot ? true : false;

		const srcset = Object.assign({}, this.props.imageSrcSet);
		if(hasHeadshot) {
			for(let key in srcset) {
				if(srcset.hasOwnProperty(key)) {
					srcset[key] = Math.ceil((srcset[key] / 100) * 60);
				}
			}
		}

		const classes = [
			'card__image-link',
			hasHeadshot ? 'card__image-link--headshot' : '',
			this.props.yCentre ? 'card__image-link--y-centre' : ''
		]
		.concat(responsiveClass('card__image-link', objMap(this.props.stickToBottom, (it) => it ? 'stick' : 'nostick')))
		.filter(className => className)
		.join(' ');

		return (
			<a className={classes} href={'/content/' + article.id} data-trackable="image">
				<NImage
					picClass={"card__picture"}
					imgClass={"card__image"}
					srcset={srcset}
					url={url}
					isImgServiceUrl={isImgServiceUrl}/>
			</a>
		);
	}
}
