import React, { Component } from 'react';

import Image from 'n-image';

class Concept extends Component {
	render () {
		return (
			<div className="card card--myft-promo" data-trackable="myft-promo">
				<div className="myft-promo">
					<Image
						url="https://next-geebee.ft.com/assets/myft-tour/devices-dot.png"
						imgClass="myft-promo__image"
						srcset={{ default: 177, m: 110, l: 143, xl: 177}} />
					<p className="myft-promo__description">Save time by following topics to create your own news feed.</p>
					<p className="myft-promo__description myft-promo__description--large">You choose the topics, we deliver the news.</p>
					<p className="myft-promo__link-wrapper">
						<a href="/myft/product-tour" className="myft-promo__link" data-trackable="link">Take a tour of <em>my</em>FT</a>
					</p>
				</div>
			</div>
		);
	}
}

export default Concept;
