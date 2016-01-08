import React, {Component} from 'react';

import {responsiveValue} from './helpers';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

class Article extends Component {
	render () {
		if(!this.props.article) {
			return null;
		}
		const article = this.props.article;
		const showCard = responsiveValue(this.props.show);
		const showStandFirst = responsiveValue(this.props.standFirst);
		const showImg = responsiveValue(this.props.image);

		const showRelated = responsiveValue(this.props.showRelated);
		const isLandscape = responsiveValue(this.props.landscape);
		const attrs = {
			className: 'card',
			'data-trackable': 'card'
		};

		if (article.primaryImage && showImg.includes('true')) {
			Object.assign(attrs, { 'data-image-show': showImg });

			// landscape only applicable if there's an image
			if (isLandscape.includes('true')) {
				Object.assign(attrs, { 'data-landscape': isLandscape });
			}
		}

		if (showCard.includes('false')) {
			Object.assign(attrs, { 'data-show': showCard });
		}

		return (
			<article {...attrs}>
				<div>
					{(article.primaryTag && article.primaryTag.taxonomy !== 'authors') ? <Tag tag={article.primaryTag} size={this.props.tagSize} /> : null}
					<Title title={article.title} href={'/content/' + article.id} size={this.props.titleSize} />
					{(article.primaryTag && article.primaryTag.taxonomy === 'authors') ? <Tag tag={article.primaryTag} size={this.props.tagSize} /> : null}
				</div>
				{(article.summary && showStandFirst.includes('true')) ? <Standfirst article={article} size={this.props.standFirstSize} show={this.props.showStandFirst} /> : null}
				{(article.primaryImage && showImg.includes('true')) ? <Image article={article} stickToBottom={this.props.imageStick}/> : null}
				{article.relatedContent && showRelated.includes('true') ? <Related articles={article.relatedContent} show={this.props.showRelated} /> : null}
			</article>
		);
	}
}

export default Article;
