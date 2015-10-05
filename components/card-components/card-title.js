/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardTitle extends Component {
	render() {
		const article = this.props.article;
		return (
			<a className="card__title-link" href={'/content/' + article.id} data-trackable="link">
				<h2 className="card__title">{article.title}</h2>
			</a>
		);
	}
}

export default CardTitle;
