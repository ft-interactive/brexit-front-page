/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardRelated extends Component {
	render() {
		const article = this.props.article;
		const relatedEls = (article.relatedContent || []).map(related => (
			<li className="card__related-item" key={related.id}>
				<a href={'/content/' + related.id} data-trackable="related">{related.title}</a>
			</li>
		));
		return relatedEls ?
			<ol className="card__related-items">
				{relatedEls}
			</ol> :
			'';
	}
}

export default CardRelated;
