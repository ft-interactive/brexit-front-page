import React, {Component} from 'react';

import {objMap, responsiveValue, responsiveClass} from './helpers';
import expandProps from './expandProps';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

import Ad from './ad';

const className = (size) => {
	const sz = objMap(size, (s) => (s === 'tiny' ? 'inline' : null));
	const result = ['card', responsiveClass('card', sz)];

	return result.filter(it => !!it).join(' ');
}

class Card extends Component {
	render () {
		const article = this.props.article;
		const {show, size, tagSize, titleSize, showStandFirst, standFirstSize, image} = expandProps(this.props);

		// FIXME make these responsive
		const related = !!this.props.related && article.relatedContent && article.relatedContent.length > 0;

		if(this.props.ad) return <Ad />;

		return (
			<article className={className(size)} data-trackable="card" data-card-show={responsiveValue(show)}>
				<Tag tag={article.primaryTag} size={tagSize} />
				<Title title={article.title} href={'/content/' + article.id} size={titleSize} />
				<Standfirst article={article} style={article.primaryTag.taxonomy} size={standFirstSize} show={showStandFirst} />
				{!!article.primaryImage ? <Image article={article} show={image} /> : null}
				{false && related ? <Related articles={article.relatedContent} limit={this.props.related} /> : null}
			</article>
		);
	}
}

export default Card;
