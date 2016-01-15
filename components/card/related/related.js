import React, {Component} from 'react';

export default class Related extends Component {
	render () {
		const articles = this.props.articles;
		const relatedEls = this.props.show.map((show, i) => {
			const related = articles[i];

			return (
				<li className="card__related-item" key={related.id}>
					<a href={'/content/' + related.id} className="card__related-item__link" data-trackable="related">{related.title}</a>
				</li>
			);
		});

		return (
			<ol className="card__related-items">
				{relatedEls}
			</ol>
		);
	}
}
