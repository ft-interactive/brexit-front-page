import React, {Component} from 'react';

/**
 * @param {Object[]) items
 * @param {string) items[].id
 * @param {string) items[].title
 */
export default class Related extends Component {
	render () {
		const relatedEls = this.props.items.map(item =>
			<li className="card__related-item" key={item.id}>
				<a href={`/content/${item.id}`} className="card__related-item__link" data-trackable="related">
					{item.title}
				</a>
			</li>
		);

		return (
			<ol className="card__related-items">
				{relatedEls}
			</ol>
		);
	}
}
