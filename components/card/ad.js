import React, {Component} from 'react';
import {responsiveValue} from './helpers';

class Ad extends Component {
	render () {
		const attrs = {
			'data-trackable': ' ad'
		};
		let adClassName = 'ad-placeholder';

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
				<div {...attrs} className={adClassName} data-trackable="ad"></div>
		);
	}
}

export default Ad;
