import React, {Component} from 'react';

import {buildColumns, layoutNames} from '../../layout/engine';
import Card from '../../card/card';

const colspanToString = (span) => {
	return span.default + ' ' + layoutNames.filter(it => span.hasOwnProperty(it)).map(it => it + span[it]).join(' ');
};

export default class SectionContent extends Component {
	render () {
		const items = this.props.items.slice();

		const columnDefs = buildColumns(this.props.cards, items);
		const columns = columnDefs.map((column, colIdx) => {
			const colspan = colspanToString(column.colspan);

			const cards = column.cards.map(props => {
				return props.item ? <Card {...props} key={props.item.id} /> : null;
			});

			return (
				<div className={'column ' + this.props.style + '__column'} data-o-grid-colspan={colspan} key={colIdx}>
					{cards}
				</div>
			);
		});

		return (
			<div className="o-grid-container--compact">
				<div className="o-grid-row">
					{columns}
				</div>
			</div>
		)
	}
}
