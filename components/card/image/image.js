import React, {Component} from 'react';

export default class Image extends Component {
	render() {
		const article = this.props.article;
		return (
			<a className={'card__image-link card__image-link--' + this.props.display} href={'/content/' + article.id} data-trackable="image">
				<img className='card__image' src={article.primaryImage.src} />
			</a>
		);
	}
}
