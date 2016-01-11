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
		if(!article) {
			return null;
		}
		const showCard = responsiveValue(this.props.show);
		const showStandFirst = responsiveValue(this.props.showStandFirst);
		const showImg = responsiveValue(this.props.image);
		const isLandscape = responsiveValue(this.props.landscape);
		const attrs = {
			className: 'card card--liveblog liveblog--' + article.status.toLowerCase(),
			'data-trackable': 'card',
			'data-size': responsiveValue(this.props.size, true)

		};
		if (showCard.includes('false')) {
			Object.assign(attrs, { 'data-show': showCard });
		}
		if (article.primaryImage && showImg.includes('true')) {
			Object.assign(attrs, { 'data-image-show': showImg });

			// landscape only applicable if there's an image
			if (isLandscape.includes('true')) {
				Object.assign(attrs, { 'data-landscape': isLandscape });
			}
		}

		article.summary = article.updates.length ? article.updates[0].text.split(/\.\s/).slice(0, 1) + '.' : null;
		return (
			<article {...attrs}>
				<div>
					<span className="liveblog__badge">live</span>
					{(article.primaryTag && article.primaryTag.taxonomy !== 'authors') ? <Tag tag={article.primaryTag} /> : null}
					<Title title={article.title} href={'/content/' + article.id} />
					{(article.primaryTag && article.primaryTag.taxonomy === 'authors') ? <Tag tag={article.primaryTag} /> : null}
				</div>
				{(article.summary && showStandFirst.includes('true')) ? <Standfirst article={article} size="medium" show={this.props.showStandFirst} /> : null}
				{(article.primaryImage && showImg.includes('true')) ? <Image article={article} stickToBottom={this.props.imageStick}/> : null}
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
