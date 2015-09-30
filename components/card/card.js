/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

import CardLarge from './card-large';
import CardMedium from './card-medium';
import CardSmall from './card-small';
import CardHeadline from './card-headline';

class Card extends Component {
	render() {
		const article = this.props.article;
		switch(this.props.type) {
			case 'large':
				return <CardLarge article={article} />;
			case 'small':
				return <CardSmall article={article} />;
			case 'headline':
				return <CardHeadline article={article} />;
			default:
				return <CardMedium article={article} />;
		}
	}
}

export default Card;
