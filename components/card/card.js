import React, {Component} from 'react';

import expandProps from './expandProps';
import {responsiveValue} from './helpers';

import Article from './article';
import Ad from './ad';
import Video from './video';
import LiveBlog from './liveBlog';



class Card extends Component {
	render () {
		const item = this.props.item;

		const props = expandProps(Object.assign({}, this.props));
		props.showCard = responsiveValue(props.show);



		if (props.type === 'ad') {
			return <Ad {...props} />;
		} else if (item.type === 'video') {
			const videoProps = Object.assign({}, props, { video: item });
			return <Video {...videoProps} />;
		} else if (item.type === 'LiveBlog') {
			const liveBlogProps = Object.assign({}, props, { liveBlog: item });
			return <LiveBlog {...liveBlogProps} />;
		} else {
			const articleProps = Object.assign({}, props, { article: item });
			return <Article {...articleProps} />;
		}
	}
}

export default Card;
