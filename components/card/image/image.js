import React, {Component} from 'react';
import {objMap, responsiveValue, responsiveClass} from '../helpers';

export default class Image extends Component {
	render () {
		const article = this.props.article;
		const stickToBottom = responsiveClass('card__image-link', objMap(this.props.stickToBottom, (it) => it ? 'stick' : 'nostick'));

		return (
			<a className={'card__image-link ' + stickToBottom} data-image-show={responsiveValue(this.props.show)} href={'/content/' + article.id} data-trackable="image">
				<img className='card__image' src={article.primaryImage.src} />
			</a>
		);
	}
}
