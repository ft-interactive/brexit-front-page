import React, {Component} from 'react';
import dateFormat from 'dateformat';

import {responsiveValue} from './helpers';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'


class LiveBlog extends Component {
	render () {
		const article = this.props.liveBlog;
		const hasImg = article.primaryImage ? 'true' : 'false';
		return (
			<article
					className={"card card--liveblog liveblog--" + article.status.toLowerCase()}
					data-card-landscape={responsiveValue(this.props.landscape)}
					data-trackable="card"
					data-card-show={responsiveValue(this.props.show)}
					data-card-has-image={hasImg}
					data-image-show={responsiveValue(this.props.image)}>
				<div>
					<span className="liveblog__badge">live</span>
					{(article.primaryTag && article.primaryTag.taxonomy !== 'authors') ? <Tag tag={article.primaryTag} size={this.props.tagSize} /> : null}
					<Title title={article.title} href={'/content/' + article.id} size={this.props.titleSize} />
					{(article.primaryTag && article.primaryTag.taxonomy === 'authors') ? <Tag tag={article.primaryTag} size={this.props.tagSize} /> : null}
				</div>
				<Standfirst article={article} size={this.props.standFirstSize} show={this.props.showStandFirst} />
				{article.primaryImage ? <Image article={article} show={this.props.image} stickToBottom={this.props.imageStick}/> : null}
				{this.props.showRelated.length > 0 ? <Related articles={article.relatedContent} show={this.props.showRelated} /> : null}
				<div className="card__footer">
					<i className="liveblog__live-indicator"><i className="glow"></i></i>

					{article.status === 'InProgress' ? <span>last post&nbsp;</span> : null}
					{article.status === 'Closed' ? <span>liveblog closed&nbsp;</span> : null}
					{article.status === 'ComingSoon' ? <span>coming soon</span> : <time
						data-o-component="o-date"
						className="o-date"
						dateTime={dateFormat(article.updates[0].date, 'isoUtcDateTime')}>{dateFormat(article.updates[0].date, 'isoUtcDateTime')}
					</time>
					}
				</div>
			</article>
		);
	}
}

export default LiveBlog;
