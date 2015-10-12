import React, {Component} from 'react';
import Card from '../../card/card';

const buildColumns = (cards) => {
	return cards.reduce(([columns, currentColumn], card) => {
		if(+card.column === currentColumn) {
			columns[currentColumn].push(card);
			return [columns, currentColumn];
		} else {
			columns.push([card]);
			return [columns, +card.column]
		}
	}, [ [[]], 0 ])[0];
}

export default class SectionContent extends Component {
	render() {
		const articles = this.props.articles.slice();

		const columns = buildColumns(this.props.cards).map((columnCards, colIdx) => {
			const columnWidth = columnCards[0].width;
			const cards = columnCards.map(card => {
				const article = articles.shift();

				if(!article) return null;

				const props = Object.assign({}, card, { article, key: article.id });
				return <Card {...props} />;
			});

			return (
				<div className={'column ' + this.props.style + '__column'} data-o-grid-colspan={'12 M' + columnWidth} key={colIdx}>
					{cards}
				</div>
			);
		});

		return (
			<div className="top-stories o-grid-container o-grid-container--compact">
				<div className="o-grid-row">
					{columns}
				</div>
			</div>
		)
	}
}
