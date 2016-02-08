import React, { Component } from 'react';

import { responsiveValue } from './../../libs/helpers';

/**
 * @param {string} title
 * @param {string} id
 */
export default class extends Component {
	render () {
		const attrs = {
			className: 'card card--video'
		};
		if (this.props.show) {
			attrs['data-show'] = responsiveValue(this.props.show);
		}

		if (this.props.isTransparent) {
			attrs.className += ` card--transparent`;
		}

		return (
			<article {...attrs}>
				{/* wrapper needed for firefox */}
				<div>
					<div
						className="js-video video-wrapper"
						data-n-component="n-video"
						data-n-video-source="brightcove"
						data-n-video-opts-optimum-width="355"
						data-n-video-id={this.props.id} />
					<h2 className="card__title" data-trackable="title">{this.props.title}</h2>
				</div>
			</article>
		);
	}
}
