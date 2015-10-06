import React, {Component} from 'react';
import Card from '../card/card';

const config = [
	{
		colSpan: '12 M3',
		cards: [
			{
				type: 'large'
			}
		]
	},
	{
		colSpan: '12 M3',
		cards: [
			{
				type: 'medium'
			}
		]
	},
	{
		colSpan: '12 M4',
		cards: [
			{
				type: 'ad'
			},
			{
				type: 'headline'
			}
		]
	},
	{
		colSpan: '12 M2',
		cards: [
			{
				type: 'small'
			},
			{
				type: 'small',
				showImage: false
			}
		]
	}
]

class Opinion extends Component {
	render() {
		const articles = this.props.articles;
		const columns = config.map(colConfig => {
			const cards = colConfig.cards.map(cardConfig => {
				const article = articles.shift();
				const props = Object.assign({}, cardConfig, { article, key: article.id });
				return <Card {...props} />;
			});
			return (
				<div className="column opinion__column" data-o-grid-colspan={colConfig.colSpan}>
					{cards}
				</div>
			);
		});
		return (
			<div className="opinion o-grid-container o-grid-container--compact">
				<div className="o-grid-row">
					{columns}
				</div>
			</div>
		)
	}
}

export default Opinion;
