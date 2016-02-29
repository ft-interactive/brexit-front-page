import React, {Component} from 'react';

import colspan from '../../../../client/utils/colspan';
import { responsiveValue } from '../../../libs/helpers';
import Timestamp from '../timestamp/timestamp';

/**
 * @param {Object[]) items
 * @param {string) items[].id
 * @param {string) items[].title
 * @param {string) [items[].lastPublished]
 * @param {string) [size]
 */
export default class extends Component {
	render () {
		const relatedEls = this.props.items.map(item =>
			<li className="card__related-item" key={item.id} data-o-grid-colspan={colspan(this.props.colspan)}>
				<a href={`/content/${item.id}`} className="card__related-item__link" data-trackable="related" >
					{item.title}
				</a>
				{item.lastPublished ? <Timestamp date={item.lastPublished} /> : null}
			</li>
		);

		let classNames = 'card__related-items';
		if (this.props.size) {
			classNames += ` card__related-items--${this.props.size}`;
		}

		return (
			<ol className={classNames} data-show={responsiveValue(this.props.show)}>
				{relatedEls}
			</ol>
		);
	}
}
