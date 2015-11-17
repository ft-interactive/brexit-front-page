import React, {Component} from 'react';

import expandProps from './expandProps';

import Article from './article';
import Video from './video';

class Card extends Component {
	render () {
		const item = this.props.item;
		console.log(this.props.landscape);
		const props = expandProps(this.props);

		if (item.type === 'video') {
			const videoProps = Object.assign({}, props, { video: item });
			return <Video {...videoProps} />;
		} else {
			const articleProps = Object.assign({}, props, { article: item });
			return <Article {...articleProps} />;
		}
	}
}

export default Card;
