import React, {Component} from 'react';
import {responsiveValue} from './helpers';

class Ad extends Component {
	render () {
		const attrs = {
			className: 'card card--ad',
			'data-trackable': 'card | ad'
		};

		const showCard = responsiveValue(this.props.show);

		if (showCard.includes('false')) {
			Object.assign(attrs, { 'data-show': showCard });
		}

		return (
			<article className="card card--ad" data-trackable="card | ad" data-show={showCard}>
				<div className="content-ad-placeholder ad-placeholder"></div>

			</article>
		);
	}
}

export default Ad;
