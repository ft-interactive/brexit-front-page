/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

import Card from '../card/card';

class TopStories extends Component {
	render() {
		const articles = this.props.articles;
		const firstColArticles = articles.slice(0, 1).map(article => <Card key={article.id} type="large" article={article} />);
		const secondColArticles =
			articles.slice(1, 2).map(article => <Card key={article.id} type="medium" article={article} />)
				.concat(articles.slice(2, 3).map(article => <Card key={article.id} type="small" article={article} />));
		const thirdColArticles =
			articles.slice(3, 4).map(article => <Card key={article.id} type="small" article={article} />)
				.concat(articles.slice(4, 8).map(article => <Card key={article.id} type="headline" article={article} />));
		return (
			<div className="top-stories o-grid-container">
				<div className="o-grid-row">
					<div className="top-stories__column" data-o-grid-colspan="12 M5">
						{firstColArticles}
					</div>
					<div className="top-stories__column" data-o-grid-colspan="12 M4">
						{secondColArticles}
					</div>
					<div className="top-stories__column" data-o-grid-colspan="12 M3">
						{thirdColArticles}
					</div>
				</div>
			</div>
		);
	}
}

export default TopStories;
