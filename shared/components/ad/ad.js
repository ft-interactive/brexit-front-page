import React, { Component } from 'react';

import { responsiveValue } from './../../libs/helpers';

export default class extends Component {
	render () {
		const attrs = {
			'data-trackable': ' ad'
		};
		let adClassName = 'o-ads';

		if(this.props.show) {
			const showCard = responsiveValue(this.props.show);

			if (showCard.includes('false')) {
				Object.assign(attrs, { 'data-show': showCard });
			}
		}


		if(this.props.adClasses) {
			adClassName += ' ' + this.props.adClasses;
		}

		return (
				<div {...attrs} className={adClassName} data-trackable="ad" data-o-ads-name={this.props.adName} data-o-ads-targeting={this.props.targeting} aria-hidden="true" data-o-ads-label="false"></div>
		);
	}
}
