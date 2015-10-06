/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import {CardTag, CardTitle, CardStandfirst, CardImage} from '../card-components/card-components';

class CardMedium extends Component {
	render() {
		const article = this.props.article;
		return (
			<article className={'card card--medium card__tag--' + article.primaryTag.taxonomy} data-trackable="card">
				<CardTag article={article} />
				<CardTitle article={article} />
				<CardStandfirst article={article} />
				<CardImage article={article} />
			</article>
		);
	}
}

export default CardMedium;
