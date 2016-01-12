import React, {Component} from 'react';
import {responsiveValue} from './helpers';

class Ad extends Component {
	render () {
		const attrs = {
			className: 'card card--ad',
			'data-trackable': 'card | ad'
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
			<article {...attrs} >
				<div className={adClassName}></div>
			</article>
		);
	}
}

export default Ad;
