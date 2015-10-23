import React, {Component} from 'react';

import buildColumns from '../layout/engine';
import Card from '../../card/card';

export default class SectionContent extends Component {
	render () {
		const articles = this.props.articles.slice();

		console.log('Using layout', this.props.cards);
		const columnDefs = buildColumns(this.props.cards, articles);
		console.log('Created column definitions', columnDefs);

		const columns = columnDefs.map((columnCards, colIdx) => {
			const colspan = columnCards[0].colspan;
			const cards = columnCards.map(props => {
				return <Card {...props} />;
			});

			return (
				<div className={'column ' + this.props.style + '__column'} data-o-grid-colspan={colspan} key={colIdx}>
					{cards}
				</div>
			);
		});

		return (
			<div className="o-grid-container o-grid-container--compact">
				<div className="o-grid-row">
					{columns}
				</div>
			</div>
		)
	}
}
