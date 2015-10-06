import React, {Component} from 'react';
import FastFtItem from './fast-ft-item';

class FastFt extends Component {
	render() {
		const articleEls = this.props.articles.map(article => <li key={article.id}><FastFtItem article={article} /></li>);
		return (
			<div className="fast-ft">
				<h2><span className="fast-ft__logo fast-ft__logo--fast">fast</span><span className="fast-ft__logo fast-ft__logo--ft">FT</span></h2>
				<ol className="fast-ft__items">
					{articleEls}
				</ol>
			</div>
		);
	}
}

export default FastFt;
