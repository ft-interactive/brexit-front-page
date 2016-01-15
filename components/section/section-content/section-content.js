import React, {Component} from 'react';

import Card from '../../card/card';
import Content from '../../card/content';
import Concept from '../../card/concept';
import Video from '../../card/video';

import colspanToString from '../../../client/utils/colspan';


export default class SectionContent extends Component {
	render () {
		const items = this.props.items.slice();
		const layout = this.props.layout(items);
		let storyIndex = 0;

		const columns = layout.map((column, colIdx) => {
			const colspan = colspanToString(column.colspan);

			let className = `column ${this.props.style}__column`;

			if(column.className) {
				className += ` ${column.className}`;
			}

			const cards = column.cards.map((props, index) => {
				let item;
				let key;
				if([Content, Concept, Video].some(type => type === props.type)) {
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
				<div className={className} data-o-grid-colspan={colspan} key={colIdx}>
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
