import React, {Component} from 'react';

class Video extends Component {
	render () {
		const video = this.props.item;
		return (
			<article className="card card--stretch card--video">
				<div
					className="js-video"
					data-n-component="n-video"
					data-n-video-source="brightcove"
					data-n-video-opts-optimum-width="720"
					data-n-video-id={video.id} />
				<h2 className="card__title" data-trackable="title">{video.title}</h2>
			</article>
		);
	}
}

export default Video;
