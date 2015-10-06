/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardTag extends Component {
	render() {
		const article = this.props.article;
		return (
			<a className={'card__tag card__tag--' + article.primaryTag.taxonomy} href={article.primaryTag.url} data-trackable="tag">
				{article.primaryTag.name}
			</a>
		);
	}
}

export default CardTag;
