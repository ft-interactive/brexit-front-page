/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import {CardTag, CardTitle, CardStandfirst, CardImage, CardRelated} from '../card-components/card-components';

class CardLarge extends Component {
	render() {
		const article = this.props.article;
		const hasImage = !!article.primaryImage;
		const imageEl = hasImage ? <CardImage article={article} /> : '';
		const classes = ['card', 'card--small', 'card--tall', 'card__tag--' + article.primaryTag.taxonomy];
		if (hasImage) {
			classes.push('card--has-image');
		}
		return (
			<article className={classes.join(' ')} data-trackable="card">
				<CardTag article={article} />
				<CardTitle article={article} />
				{imageEl}
			</article>
		);
	}
}

export default CardLarge;
