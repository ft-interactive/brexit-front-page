import React, {Component} from 'react';
import colspanToString from '../../../../client/utils/colspan';
import { responsiveValue } from '../../../libs/helpers';

/**
 * @param {Object[]) items
 * @param {string) items[].id
 * @param {string) items[].title
 */
export default class extends Component {
	render () {
		const relatedEls = this.props.content.map(item =>
			<li className="card__related-item" key={item.id} data-o-grid-colspan={colspanToString(this.props.colspan)}>
				<a href={`/content/${item.id}`} className="card__related-item__link" data-trackable="related" >
					{item.title}
				</a>
			</li>
		);

		return (
			<ol className="card__related-items" data-show={responsiveValue(this.props.show)}>
				{relatedEls}
			</ol>
		);
	}
}
