import React, {Component} from 'react';

import {responsiveValue} from './helpers';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

class Article extends Component {
	render () {
		const article = this.props.article;

		return (
			<article
					className="card"
					data-card-landscape={responsiveValue(this.props.landscape)}
					data-trackable="card"
					data-card-show={responsiveValue(this.props.show)}
					data-image-show={responsiveValue(this.props.image)}>
				<div>
					{(article.primaryTag && article.primaryTag.taxonomy !== 'authors') ? <Tag tag={article.primaryTag} size={this.props.tagSize} /> : null}
					<Title title={article.title} href={'/content/' + article.id} size={this.props.titleSize} />
					{(article.primaryTag && article.primaryTag.taxonomy === 'authors') ? <Tag tag={article.primaryTag} size={this.props.tagSize} /> : null}
				</div>
				<Standfirst article={article} size={this.props.standFirstSize} show={this.props.showStandFirst} />
				{article.primaryImage ? <Image article={article} show={this.props.image} stickToBottom={this.props.imageStick}/> : null}
				{this.props.showRelated.length > 0 ? <Related articles={article.relatedContent} show={this.props.showRelated} /> : null}
			</article>
		);
	}
}

export default Article;
