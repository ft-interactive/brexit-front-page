import React, {Component} from 'react';

import {responsiveValue} from './helpers';
import expandProps from './expandProps';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

import Ad from './ad';

const stickToBottom = (showRelated) => {
	if(showRelated.length < 1) return {default: true}

	console.log('Some related stories...');
	return showRelated.reduce((noRelated, relatedStory) => {
		Object.keys(relatedStory).forEach((l) => noRelated[l] = (noRelated[l] || !relatedStory[l]));
		console.log('noRelated', noRelated);
		return noRelated;
	}, {})
}

class Card extends Component {
	render () {
		const article = this.props.article;
		const {show, tagSize, titleSize, showStandFirst, standFirstSize, image, showRelated} = expandProps(this.props);

		if(this.props.ad) return <Ad />;

		return (
			<article className="card" data-trackable="card" data-card-show={responsiveValue(show)}>
				<div>
					<Tag tag={article.primaryTag} size={tagSize} />
					<Title title={article.title} href={'/content/' + article.id} size={titleSize} />
				</div>
				<Standfirst article={article} style={article.primaryTag.taxonomy} size={standFirstSize} show={showStandFirst} />
				{!!article.primaryImage ? <Image article={article} show={image} stickToBottom={stickToBottom(showRelated)}/> : null}
				{showRelated.length > 0 ? <Related articles={article.relatedContent} show={showRelated} /> : null}
			</article>
		);
	}
}

export default Card;
