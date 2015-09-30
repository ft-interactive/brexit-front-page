/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardHeadline extends Component {
	render() {
		const article = this.props.article;
		return (
			<article className="card card--headline" data-trackable="card">
				<a className="card__tag" href={article.primaryTag.url} data-trackable="tag">{article.primaryTag.name}</a>
				<a className="card__title-link" href={'/content/' + article.id} data-trackable="link">
					<h2 className="card__title">{article.title}</h2>
				</a>
			</article>
		);
	}
}

export default CardHeadline;
