import React, {Component} from 'react';
import {CardTag, CardTitle, CardStandfirst, CardImage, CardRelated} from '../card-components/card-components';

class CardLarge extends Component {
	render() {
		const article = this.props.article;
		const imageEl = article.primaryImage ? <CardImage article={article} /> : '';
		const relatedEl = (article.relatedContent || []).length ? <CardRelated article={article} /> : '';
		return (
			<article className={'card card--large card__tag--' + article.primaryTag.taxonomy} data-trackable="card">
				<CardTag article={article} />
				<CardTitle article={article} />
				<CardStandfirst article={article} />
				{imageEl}
				{relatedEl}
			</article>
		);
	}
}

export default CardLarge;
