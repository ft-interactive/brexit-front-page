/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import FastFtItem from './fast-ft-item';

class FastFt extends Component {
	render() {
		const articleEls = this.props.articles.map(article => <li key={article.id}><FastFtItem article={article} /></li>);
		return (
			<div className="fast-ft">
				<ol className="fast-ft__items">
					{articleEls}
				</ol>
			</div>
		);
	}
}

export default FastFt;
