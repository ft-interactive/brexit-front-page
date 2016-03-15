import React, { Component } from 'react';

import Image from 'n-image';

export default class extends Component {
	render () {
		const linkDestination = this.props.isMyftUser ? '/myft' : '/myft/product-tour';
		const linkTextPrefix = this.props.isMyftUser ? 'Go to' : 'Take a tour of';

		return (
			<div className="card card--myft-promo" data-trackable="myft-promo">
				<div className="myft-promo">
					<Image
						url="https://next-geebee.ft.com/assets/myft-tour/devices-dot.png"
						imgClass="myft-promo__image"
						srcset={{ default: 177, m: 110, l: 143, xl: 177 }} />
					<p className="myft-promo__description">You choose the topics, we deliver the news.</p>
					<p className="myft-promo__link-wrapper">
						<a
							href={linkDestination} className="myft-promo__link" data-trackable="link"
							aria-label={linkTextPrefix + ' my F T'}>
							{linkTextPrefix} <em>my</em>FT
						</a>
					</p>
				</div>
			</div>
		);
	}
}
