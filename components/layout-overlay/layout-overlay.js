import React, {Component} from 'react';

export default class LayoutOverlay extends Component {
	constructor(props) {
		super(props);

		this.state = {expanded: false};
	}

	toggle(e) {
		e.preventDefault();
		this.setState({expanded: !this.state.expanded});
	}

	render() {
		return (
			<aside className={'layout-overlay layout-overlay--' + (this.state.expanded ? 'expanded' : 'collapsed')}>
				<a href="#" className="layout-overlay__toggle" onClick={this.toggle.bind(this)} data-trackable="overlay-toggle">
					<span className="n-util-visually-hidden">
						{this.state.expanded ? 'hide' : 'show'}
					</span>
				</a>
				<div className="layout-overlay__body">
					<h2>Layout Configuration</h2>
				</div>
			</aside>
		);
	}
}
