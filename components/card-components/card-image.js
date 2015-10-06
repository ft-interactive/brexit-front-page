/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardImage extends Component {
	render() {
		const article = this.props.article;
		return (
			<a className="card__image-link" href={'/content/' + article.id} data-trackable="image">
				<img className="card__image" src={article.primaryImage.src} />
			</a>
		);
	}
}

export default CardImage;
