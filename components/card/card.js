import React, {Component} from 'react';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

import Ad from './ad';

const className = (classes) => {
	let result = []

	for(const name in classes) {
		if(classes[name]) result.push(name)
	}

	return result.join(' ');
}

class Card extends Component {
	render() {
		const article = this.props.article;

		const tagSize = this.props.tagSize;
		const titleSize = this.props.titleSize;
		const standFirst = this.props.standFirst;
		const image = this.props.image;
		const showImage = !!image && article.primaryImage;
		const related = !!this.props.related && article.relatedContent && article.relatedContent.length > 0;

		if(this.props.ad) return <Ad />;

		return (
			<article className={className({card: true, 'card--inline': (titleSize === 'tiny')})} data-trackable="card">
				<Tag tag={article.primaryTag} size={tagSize}/>
				<Title title={article.title} href={'/content/' + article.id} size={titleSize} />
				{standFirst ? <Standfirst article={article} style={article.primaryTag.taxonomy} size={standFirst} /> : null}
				{showImage ? <Image article={article} display={image} /> : null}
				{related ? <Related articles={article.relatedContent} /> : null}
			</article>
		);
	}
}

export default Card;
