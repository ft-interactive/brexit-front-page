import React, {Component} from 'react';

import {responsiveValue} from './helpers';

class Video extends Component {
	render () {
		const video = this.props.item;
		return (
			<article className="card card--stretch card--video" data-card-show={responsiveValue(this.props.show)}>
				<div
					className="js-video"
					data-n-component="n-video"
					data-n-video-source="brightcove"
					data-n-video-opts-optimum-width="355"
					data-n-video-id={video.id} />
				<h2 className="card__title" data-trackable="title">{video.title}</h2>
			</article>
		);
	}
}

export default Video;
