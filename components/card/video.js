import React, {Component} from 'react';

import {responsiveValue} from './helpers';

class Video extends Component {
	render () {
		const video = this.props.item;
		return (
			<article className="card card--stretch card--video" data-card-show={responsiveValue(this.props.show)}>
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
