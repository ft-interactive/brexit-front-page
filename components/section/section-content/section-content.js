import React, {Component} from 'react';

import Card from '../../card/card';

const layoutNames = ['S', 'M', 'L', 'XL'];

const colspanToString = (span) => {
	return span.default + ' ' + layoutNames.filter(it => span.hasOwnProperty(it)).map(it => it + span[it]).join(' ');
};


export default class SectionContent extends Component {
	render () {
		const items = this.props.items.slice();

		let storyIndex = 0;

		const columns = this.props.layout.map((column, colIdx) => {
			const colspan = colspanToString(column.colspan);

			const cards = column.cards.map((props) => {
				let item;
				if(props.type === 'content') {
					item = items[storyIndex++];
				}
				return (
					 <Card {...props} item={item} key={item.id} />
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
