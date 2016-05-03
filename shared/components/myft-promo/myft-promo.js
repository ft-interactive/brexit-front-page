import React, { Component } from 'react';

import { Image } from '@financial-times/n-image';

export default class extends Component {
	render () {
		const linkDestination = this.props.isMyftUser ? '/myft' : '/myft/product-tour';
		const linkTextPrefix = this.props.isMyftUser ? 'Go to' : 'Take a tour of';

		return (
			<div className="card o-card card--myft-promo" data-trackable="myft-promo">
				<div className="myft-promo">
					<Image
						url="https://next-geebee.ft.com/assets/myft-tour/myft-in-situ.png"
						classes="myft-promo__image"
						widths={[150, 185, 220]}
						sizes={{ default: '150px', m: '217px', L: '199px', XL: '207px' }} />
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
