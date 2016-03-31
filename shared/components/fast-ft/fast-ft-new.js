import React, { Component } from 'react';

import Content from '../content/content';

export default class extends Component {
	render () {
		const articleEls = this.props.data.fastFt
			.filter(article => !!article.title)
			.slice(0, this.props.count || 4)
			.map(article => Object.assign({}, article, { type: 'FastFt' }))
			.map((article, index, articles) => {
				const cardProps = {
					data: { content: articles },
					hideTag: true,
					size: (index === 0 ? 'small' : 'tiny'),
					itemIndex: index
				};
				return <li className="fast-ft__item" key={article.id}><Content {...cardProps} /></li>;
			});

		return (
			<div className="fast-ft fast-ft--new">
				<h2 className="fast-ft__logo-outer">
					<a className="fast-ft__link" href="/fastft" data-trackable="go-to-link" aria-label="fast F T">
						<span className="fast-ft__logo fast-ft__logo--fast">fast</span><span className="fast-ft__logo fast-ft__logo--ft">FT</span>
					</a>
				</h2>
				<ol className="fast-ft__items">
					{articleEls}
				</ol>
			</div>
		);
	}
}
