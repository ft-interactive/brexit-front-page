import React, { Component } from 'react';

import Content from '../content/content';

export default class extends Component {
	render () {
		const articleEls = this.props.articles
			.filter(article => !!article.title)
			.slice(0, 20)
			.map(article => Object.assign({}, article, { type: 'FastFt' }))
			.map((article, index, articles) => {
				const cardProps = {
					data: { content: articles },
					hideTag: true,
					size: (index === 0 ? 'small' : 'tiny'),
					itemIndex: index,
					show: { default: true, L: index <= 6, XL: index <= 3 }
				};
				return <li className="fast-ft__item" key={article.id}><Content {...cardProps} /></li>;
			});

		return (
			<div className="fast-ft-wrapper">
				<div className="fast-ft">
					<h2 className="fast-ft__logo-outer">
						<a className="fast-ft__link" href="/fastft" data-trackable="go-to-link" aria-label="fast F T">
							<span className="fast-ft__logo fast-ft__logo--fast">fast</span><span className="fast-ft__logo fast-ft__logo--ft">FT</span>
						</a>
					</h2>
					<ol className="fast-ft__items">
						{articleEls}
					</ol>
				</div>
			</div>
		);
	}
}
