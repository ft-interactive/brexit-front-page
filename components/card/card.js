import React, {Component} from 'react';

import expandProps from './expandProps';
import {responsiveValue} from './helpers';

class Card extends Component {
	render () {

		console.log('this.props', this.props);
		const props = expandProps(Object.assign({}, this.props));
		props.showCard = responsiveValue(props.show);
		return <props.cardType {...props} />;
	}
}

export default Card;
