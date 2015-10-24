import React, {Component} from 'react';
import {responsiveValue} from '../helpers';

export default class Image extends Component {
	render () {
		const article = this.props.article;
		return (
			<a className='card__image-link' data-image-show={responsiveValue(this.props.show)} href={'/content/' + article.id} data-trackable="image">
				<img className='card__image' src={article.primaryImage.src} />
			</a>
		);
	}
}
