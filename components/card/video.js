import React, {Component} from 'react';

import {responsiveValue} from './helpers';

class Video extends Component {
	render () {
		const video = this.props.item;
		if(!video) {
			return null;
		}
		const showCard = responsiveValue(this.props.show);
		const attrs = {
			className: 'card card--stretch card--video'
		};
		if (showCard.includes('false')) {
			Object.assign(attrs, { 'data-show': showCard });
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
						data-n-video-id={video.id} />
					<h2 className="card__title" data-trackable="title">{video.title}</h2>
				</div>
			</article>
		);
	}
}

export default Video;
