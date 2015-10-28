import React, {Component} from 'react';

export default class LayoutSwitcher extends Component {
	switch (layout) {
		return (e) => {
			e.preventDefault();

			this.props.updateLayout(layout);
		}
	}

	render () {
		return (
			<ul className="layout-switcher" data-trackable="layout-switcher">
				<li className={'layout-switcher__layout' + (this.props.layout === 'default' ? ' layout-switcher__layout--selected' : '')}>
					<a href="" onClick={this.switch('default')} data-trackable="phone">phone</a>
					</li>
				<li className={'layout-switcher__layout' + (this.props.layout === 'S' ? ' layout-switcher__layout--selected' : '')}>
					<a href="" onClick={this.switch('S')} data-trackable="small">small</a>
				</li>
				<li className={'layout-switcher__layout' + (this.props.layout === 'M' ? ' layout-switcher__layout--selected' : '')}>
					<a href="" onClick={this.switch('M')} data-trackable="medium">medium</a>
				</li>
			</ul>
		)
	}
}
