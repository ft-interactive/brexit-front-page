import React, {Component} from 'react';
import SectionMeta from '../section-meta/section-meta';
import EditorsPicks from '../editors-picks/editors-picks';

class SectionEditorsPicks extends Component {
	render() {
		return (
			<section className="section o-grid-container">
				<div className="o-grid-row">
					<div data-o-grid-colspan="12 XL2">
						<SectionMeta title="Editor's Picks" showDate={false} />
					</div>
					<div data-o-grid-colspan="12 XL10">
						<EditorsPicks articles={this.props.articles} />
					</div>
				</div>
			</section>
		);
	}
}

export default SectionEditorsPicks;
