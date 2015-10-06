/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import Card from '../card/card';

const config = [
	{
		colSpan: '12 M4 L2',
		cards: [
			{
				type: 'tall'
			}
		]
	},
	{
		colSpan: '12 M4 L2',
		cards: [
			{
				type: 'tall'
			}
		]
	},
	{
		colSpan: '12 M4 L2',
		cards: [
			{
				type: 'tall'
			}
		]
	},
	{
		colSpan: '12 M4 L2',
		cards: [
			{
				type: 'tall'
			}
		]
	},
	{
		colSpan: '12 M4 L2',
		cards: [
			{
				type: 'tall'
			}
		]
	},
	{
		colSpan: '12 M4 L2',
		cards: [
			{
				type: 'tall'
			}
		]
	}
]

class EditorsPicks extends Component {
	render() {
		const articles = this.props.articles;
		const columns = config.map(colConfig => {
			const cards = colConfig.cards.map(cardConfig => {
				const article = articles.shift();
				const props = Object.assign({}, cardConfig, { article, key: article.id });
				return <Card {...props} />;
			});
			return (
				<div className="column editors-picks__column" data-o-grid-colspan={colConfig.colSpan}>
					{cards}
				</div>
			);
		});
		return (
			<div className="editors-picks o-grid-container o-grid-container--compact">
				<div className="o-grid-row">
					{columns}
				</div>
			</div>
		)
	}
}

export default EditorsPicks;
