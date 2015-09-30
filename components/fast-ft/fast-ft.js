/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

import FastFtItem from './fast-ft-item';

class FastFt extends Component {
	render() {
		const articles = this.props.articles.map(article => <li><FastFtItem key={article.id} article={article} /></li>);
		return (
			<div className="fast-ft">
				<ol className="fast-ft__items">
					{articles}
				</ol>
			</div>
		);
	}
}

export default FastFt;
