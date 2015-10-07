import React, {Component} from 'react';
import Card from '../../card/card';

export default class SectionContent extends Component {
	render() {
		const articles = this.props.articles.slice();

		const columns = this.props.columns.map((column, colId) => {
			const cards = this.props.cards[colId].map(card => {
				const article = articles.shift();

				const props = Object.assign({}, card, { article, key: article.id });
				return <Card {...props} />;
			});

			return (
				<div className={'column ' + this.props.style + '__column'} data-o-grid-colspan={column} key={colId}>
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
