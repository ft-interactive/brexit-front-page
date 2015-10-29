import React, {Component} from 'react';

import {responsiveValue} from './helpers';
import expandProps from './expandProps';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

import Ad from './ad';

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
				{!!article.primaryImage ? <Image article={article} show={image} /> : null}
				{showRelated.length > 0 ? <Related articles={article.relatedContent} show={showRelated} /> : null}
			</article>
		);
	}
}

export default Card;
