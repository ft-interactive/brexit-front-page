import React, {Component} from 'react';

import dateFormat from 'dateformat';

class FastFtItem extends Component {
	render() {
		const article = this.props.article;
		const time = dateFormat(article.lastPublished, 'H:MMtt');
		return (
			<div className="fast-ft__item">
				<time className="fast-ft__time" datetime={article.lastPublished}>{time}</time>
				<h2 className="fast-ft__item__title">
					<a className="fast-ft__item__title-link" href={'/content/' + article.id} data-trackable="link">{article.title}</a>
				</h2>
			</div>
		);
	}
}

export default FastFtItem;
