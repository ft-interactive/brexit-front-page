import React, {Component} from 'react';
import {CardTag, CardTitle, CardImage} from '../card-components/card-components';

class CardSmall extends Component {
	render() {
		const article = this.props.article;
		const imageEl = this.props.showImage === false || !article.primaryImage ? '' : <CardImage article={article} />;
		return (
			<article className={'card card--small card__tag--' + article.primaryTag.taxonomy} data-trackable="card">
				<CardTag article={article} />
				<CardTitle article={article} />
				{imageEl}
			</article>
		);
	}
}

export default CardSmall;
