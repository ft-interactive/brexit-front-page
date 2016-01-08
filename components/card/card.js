import React, {Component} from 'react';

import expandProps from './expandProps';

import Article from './article';
import Video from './video';
import LiveBlog from './liveBlog';



class Card extends Component {
	render () {
		const item = this.props.item;

		const props = expandProps(Object.assign({}, this.props));


		if (item.type === 'video') {
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
