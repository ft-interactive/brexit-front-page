import React, {Component} from 'react';

import Card from '../../card/card';

const layoutNames = ['S', 'M', 'L', 'XL'];

const colspanToString = (span) => {
	return span.default + ' ' + layoutNames.filter(it => span.hasOwnProperty(it)).map(it => it + span[it]).join(' ');
};


export default class SectionContent extends Component {
	render () {
		const items = this.props.items.slice();
		const layout = this.props.layout(items);
		let storyIndex = 0;

		const columns = layout.map((column, colIdx) => {
			const colspan = colspanToString(column.colspan);

			const cards = column.cards.map((props, index) => {
				let item;
				let key;
				if(props.type === 'content') {
					props.itemIndex = props.itemIndex || storyIndex++;
					item = items[ props.itemIndex ];
					props.cardIndex = index;
					key = item ? item.id : null;
				} else {
					//TODO: set key for non-content items
					key = this.props.id + props.type + index;
				}
				return (
					 key ? <Card {...props} item={item} key={key} /> : null
				)
			});

			return (
				<div className={'column ' + this.props.style + '__column'} data-o-grid-colspan={colspan} key={colIdx}>
					{cards}
				</div>
			);
		});

		return (
			<div>
				<div className="o-grid-row">
					{columns}
				</div>
			</div>
		)
	}
}
