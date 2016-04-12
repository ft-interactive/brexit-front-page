import React, { Component } from 'react';
import { Content } from '@financial-times/n-section';

import { responsiveValue } from '../../libs/helpers';

const createShow = (index, count) =>
	Object.keys(count)
		.reduce((show, breakpoint) => {
			show[breakpoint] = index < count[breakpoint];
			return show;
		}, {});

const getMaxCount = count =>
	Object.keys(count)
		.reduce((maxCount, breakpoint) => Math.max(maxCount, count[breakpoint]), 0);

export default class extends Component {
	render () {
		const count = this.props.count;
		const articleEls = this.props.data.fastFt
			.filter(article => !!article.title)
			.slice(0, getMaxCount(count))
			.map(article => Object.assign({}, article, { type: 'FastFt' }))
			.map((article, index, articles) => {
				const cardProps = {
					data: { content: articles },
					hideTag: true,
					size: (index === 0 ? 'small' : 'tiny'),
					itemIndex: index
				};
				const show = createShow(index, count);

				return (
					<li className="fast-ft__item" key={article.id} data-show={responsiveValue(show)}>
						<Content {...cardProps} />
					</li>
				);
			});

		return (
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
		);
	}
}
