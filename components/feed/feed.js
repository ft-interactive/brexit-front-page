import React, {Component} from 'react';
import Animation from 'react-addons-css-transition-group';
import Article from './article';

class Feed extends Component {
	render() {
		const articles = this.props.items ? this.props.items.map((it) => <Article article={it} key={it.id} />) : [];

		return (
			<Animation
				transitionName="fade"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
				className="feed"
				tabIndex="0"
				role="region"
				aria-labelledby={this.props.labelId} >
				{articles}
			</Animation>
		);
	}
}

Feed.propTypes = {
	items: React.PropTypes.array.isRequired,
	labelId: React.PropTypes.string
};

export default Feed
