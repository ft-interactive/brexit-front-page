import React, {Component} from 'react';

import expandProps from './expandProps';
import {responsiveValue} from './helpers';

class Card extends Component {
	render () {
		const props = expandProps(Object.assign({}, this.props));
		props.showCard = responsiveValue(props.show);

		return <props.type {...props} />;
	}
}

export default Card;
