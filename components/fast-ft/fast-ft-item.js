/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

import dateFormat from 'dateformat';

class FastFtItem extends Component {
	render() {
		const article = this.props.article;
		const time = dateFormat(article.lastPublished, 'H:MMtt');
		return (
			<div className="fast-ft__item">
				<time className="fast-ft__time" datetime={article.lastPublished}>{time}</time>
				<a className="fast-ft__item__title-link" href={'/content/' + article.id} data-trackable="link">
					<h2 className="fast-ft__item__title">{article.title}</h2>
				</a>
			</div>
		);
	}
}

export default FastFtItem;
