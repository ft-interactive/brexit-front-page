import React, {Component} from 'react';
import Card from '../card/card';

const config = [
	{
		colSpan: '12 M5',
		cards: [
			{
				type: 'large'
			}
		]
	},
	{
		colSpan: '12 M4',
		cards: [
			{
				type: 'medium'
			},
			{
				type: 'small',
				showImage: false
			}
		]
	},
	{
		colSpan: '12 M3',
		cards: [
			{
				type: 'small'
			},
			{
				type: 'headline'
			},
			{
				type: 'headline'
			},
			{
				type: 'headline'
			}
		]
	}
]

class TopStories extends Component {
	render() {
		const articles = this.props.articles;
		const columns = config.map(colConfig => {
			const cards = colConfig.cards.map(cardConfig => {
				const article = articles.shift();
				const props = Object.assign({}, cardConfig, { article, key: article.id });
				return <Card {...props} />;
			});
			return (
				<div className="column top-stories__column" data-o-grid-colspan={colConfig.colSpan}>
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

export default TopStories;
