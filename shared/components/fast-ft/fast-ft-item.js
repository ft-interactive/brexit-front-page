import React, {Component} from 'react';
import {format as dateFormat} from 'o-date';

class FastFtItem extends Component {
	render () {
		const article = this.props.article;
		const time = dateFormat(article.lastPublished, 'H:mm');
		const classes = ['fast-ft__item'];
		if (this.props.desktopHide) {
			classes.push('fast-ft__item--hide-desktop');
		}

		return (
			<div className={classes.join(' ')}>
				<h2 className="fast-ft__item__title">
					<a className="fast-ft__item__title-link" href={'/content/' + article.id} data-trackable="feed-link">{article.title}</a>
					<span> – </span>
					<time className="fast-ft__time" dateTime={article.lastPublished}>{time}</time>
				</h2>
			</div>
		);
	}
}

export default FastFtItem;
