/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import CardLarge from './card-large';
import CardMedium from './card-medium';
import CardSmall from './card-small';
import CardHeadline from './card-headline';
import CardTall from './card-tall';
import CardAd from './card-ad';

class Card extends Component {
	render() {
		switch(this.props.type) {
			case 'large':
				return <CardLarge {...this.props} />;
			case 'small':
				return <CardSmall {...this.props} />;
			case 'headline':
				return <CardHeadline {...this.props} />;
			case 'tall':
				return <CardTall {...this.props} />;
			case 'ad':
				return <CardAd />;
			default:
				return <CardMedium {...this.props} />;
		}
	}
}

export default Card;
