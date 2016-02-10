import React, {Component} from 'react';
import Content from '../content/content';

class FastFt extends Component {
	render () {

		const items = this.props.articles.filter(article => !!article.title).slice(0, 20)

		const now = new Date().getTime();

		const articleEls = items.map((article, index) => {
			const cardProps = {
				items: items,
				hideTag: true,
				size: (index === 0 ? 'small' : 'tiny'),
				itemIndex: index,
				isTransparent: true,
				show: { default: true, L: index > 6 ? false : true, XL: index > 3 ? false : true }
			}
			return <li key={article.id}><Content {...cardProps}/></li>;
		});
		return (
			<div className="fast-ft-wrapper">
				<div className="fast-ft">
					<h2 className="fast-ft__logo-outer">
						<a className="fast-ft__link" href="/fastft" data-trackable="go-to-link">
							<span className="fast-ft__logo fast-ft__logo--fast">fast</span><span className="fast-ft__logo fast-ft__logo--ft">FT</span>
						</a>
					</h2>
					<ol className="fast-ft__items">
						{articleEls}
					</ol>
				</div>
				<div className="ad-placeholder ad-placeholder--fast-ft"></div>

			</div>
		);
	}
}

export default FastFt;
