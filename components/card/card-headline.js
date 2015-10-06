import React, {Component} from 'react';
import {CardTag, CardTitle} from '../card-components/card-components';

class CardHeadline extends Component {
	render() {
		const article = this.props.article;
		return (
			<article className={'card card--headline card__tag--' + article.primaryTag.taxonomy} data-trackable="card">
				<CardTag article={article} />
				<CardTitle article={article} />
			</article>
		);
	}
}

export default CardHeadline;
