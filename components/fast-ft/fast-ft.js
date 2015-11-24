import React, {Component} from 'react';
import FastFtItem from './fast-ft-item';

class FastFt extends Component {
	render () {
		const articleEls = this.props.articles.slice(0, 7).map(article => <li key={article.id}><FastFtItem article={article} /></li>);
		return (
			<div className="fast-ft-wrapper">
				<div className="fast-ft">
					<h2><a className="fast-ft__link" href="/fastft" data-trackable="go-to-link"><span className="fast-ft__logo fast-ft__logo--fast">fast</span><span className="fast-ft__logo fast-ft__logo--ft">FT</span></a></h2>
					<ol className="fast-ft__items">
						{articleEls}
					</ol>
				</div>
			</div>
		);
	}
}

export default FastFt;
