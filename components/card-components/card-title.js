/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardTitle extends Component {
	render() {
		const article = this.props.article;
		return (
			<h2 className="card__title">
				<a className="card__title-link" href={'/content/' + article.id} data-trackable="link">{article.title}</a>
			</h2>
		);
	}
}

export default CardTitle;
