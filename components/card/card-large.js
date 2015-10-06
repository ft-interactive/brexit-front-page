/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import {CardTag, CardTitle, CardStandfirst, CardImage, CardRelated} from '../card-components/card-components';

class CardLarge extends Component {
	render() {
		const article = this.props.article;
		return (
			<article className={'card card--large card__tag--' + article.primaryTag.taxonomy} data-trackable="card">
				<CardTag article={article} />
				<CardTitle article={article} />
				<CardStandfirst article={article} />
				<CardImage article={article} />
				<CardRelated article={article} />
			</article>
		);
	}
}

export default CardLarge;
