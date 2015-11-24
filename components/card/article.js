import React, {Component} from 'react';

import {responsiveValue} from './helpers';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

const stickToBottom = (showRelated) => {
	if (showRelated.length < 1) {
		return {
			default: true
		};
	}

	return showRelated.reduce((noRelated, relatedStory) => {
		Object.keys(relatedStory).forEach((l) => noRelated[l] = (noRelated[l] || !relatedStory[l]));
		return noRelated;
	}, {})
};

class Article extends Component {
	render () {
		const article = this.props.article;
		const classes = [
			'card',
			this.props.headshot ? 'card--has-headshot' : ''
		]
			.filter(className => className);
		return (
			<article
					className={classes.join(' ')}
					data-card-landscape={responsiveValue(this.props.landscape)}
					data-trackable="card"
					data-card-show={responsiveValue(this.props.show)}>
				<div>
					{article.primaryTag ? <Tag tag={article.primaryTag} size={this.props.tagSize} /> : null}
					<Title title={article.title} href={'/content/' + article.id} size={this.props.titleSize} />
				</div>
				<Standfirst article={article} style={article.primaryTag ? article.primaryTag.taxonomy : 'default'} size={this.props.standFirstSize} show={this.props.showStandFirst} />
				{!!article.primaryImage ? <Image article={article} show={this.props.image} stickToBottom={stickToBottom(this.props.showRelated)}/> : null}
				{this.props.showRelated.length > 0 ? <Related articles={article.relatedContent} show={this.props.showRelated} /> : null}
			</article>
		);
	}
}

export default Article;
