import React, {Component} from 'react';

import Article from './article';
import LiveBlog from './liveBlog';

class Content extends Component {
    render () {
        const item = this.props.item;
        if (item.type === 'LiveBlog') {
            return <LiveBlog {...this.props} />;
        } else {
            return <Article {...this.props} />;
        }
    }
}

export default Content;