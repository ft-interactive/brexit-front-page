/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import SectionMeta from '../section-meta/section-meta';
import Opinion from '../opinion/opinion';

class Section extends Component {
	render() {
		return (
			<section className="section o-grid-container">
				<div className="o-grid-row">
					<div data-o-grid-colspan="hide XL2">
						<SectionMeta title="Opinion" showDate={false} />
					</div>
					<div data-o-grid-colspan="12 XL10">
						<Opinion articles={this.props.articles} />
					</div>
				</div>
			</section>
		);
	}
}

export default Section;
