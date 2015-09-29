/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class Section extends Component {
	render() {
		return (<div className="section o-grid-row">
			<aside data-o-grid-colspan="hide XL2">
				<div className="section__meta full-cell" >
					Top Stories
				</div>
			</aside>
			<div data-o-grid-colspan="12 L10 XL8">
				<div className="section__meta--mobile">
					Top Stories
				</div>
				<div className="o-grid-row">
					<div data-o-grid-colspan="12 M5">
						<article>Card</article>
						<article>Card</article>
					</div>
					<div data-o-grid-colspan="12 M4">
						<article>Card</article>
						<article>Card</article>
					</div>
					<div data-o-grid-colspan="12 M3">
						<article>Card</article>
						<article>Card</article>
						<article>Card</article>
						<article>Card</article>
					</div>
				</div>
			</div>
			<aside data-o-grid-colspan="hide L2">
				<div className="section__extra full-cell">
					Extra stuff
				</div>
			</aside>
		</div>);
	}
}

export default Section;
