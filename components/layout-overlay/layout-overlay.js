import React, {Component} from 'react';

import Section from './section/section';
import LayoutSwitcher from './layout-switcher/layout-switcher';

export default class LayoutOverlay extends Component {
	constructor (props) {
		super(props);

		this.state = {expanded: false, layout: 'S'};
	}

	toggle (e) {
		e.preventDefault();
		this.setState({expanded: !this.state.expanded});
	}

	updateLayout (newLayout) {
		this.setState({layout: newLayout});
	}

	updateCards (sectionIndex) {
		return (newCards) => {
			const newLayout = this.props.layout;
			newLayout[sectionIndex].cards[this.state.layout] = newCards;

			this.props.onChange(newLayout);
		}
	}

	render () {
		const sections = this.props.layout.map((section, idx) => {
			return (
				<li key={section.id}>
					<Section title={section.title} layout={this.state.layout} cards={section.cards[this.state.layout]} onCardsChange={this.updateCards(idx)} />
				</li>
			)
		});

		return (
			<aside className={'layout-overlay layout-overlay--' + (this.state.expanded ? 'expanded' : 'collapsed')}>
				<a href="#" className="layout-overlay__toggle" onClick={this.toggle.bind(this)} data-trackable="overlay-toggle">
					<span className="n-util-visually-hidden">
						{this.state.expanded ? 'hide' : 'show'}
					</span>
				</a>
				<div className="layout-overlay__body">
					<h2>Layout Configuration</h2>
					<LayoutSwitcher layout={this.state.layout} updateLayout={this.updateLayout.bind(this)} />
					<h3>Sections</h3>
					<ul className="layout-overlay__sections">
						{sections}
					</ul>
				</div>
			</aside>
		);
	}
}
