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

const tagSize = (size) => {
	const sizes = {
		large: 'large',
		medium: 'large',
		small: 'medium',
		tiny: 'small'
	}

	return sizes[size];
}

const titleSize = (size, order, showImage) => {
	if(size === 'large' && +order === 0 && !showImage)
		return 'huge';

	return size;
}

const standFirstSize = (size) => {
	const sizes = {
		large: 'large',
		medium: 'medium',
		small: 'medium'
	}

	return sizes[size];
}

class Card extends Component {
	render() {
		const article = this.props.article;

		const size = this.props.size;
		const standFirst = size === 'large' || size === 'medium' && !!this.props.standFirst;
		const image = this.props.image;
		const showImage = !!image && article.primaryImage;
		const related = !!this.props.related && article.relatedContent && article.relatedContent.length > 0;

		if(this.props.ad) return <Ad />;

		return (
			<article className={className({card: true, 'card--inline': (size === 'tiny')})} data-trackable="card">
				<Tag tag={article.primaryTag} size={tagSize(size)} />
				<Title title={article.title} href={'/content/' + article.id} size={titleSize(size, this.props.order, showImage)} />
				{standFirst ? <Standfirst article={article} style={article.primaryTag.taxonomy} size={standFirstSize(size)} /> : null}
				{showImage ? <Image article={article} display={image} /> : null}
				{related ? <Related articles={article.relatedContent} limit={this.props.related} /> : null}
			</article>
		);
	}
}

export default Card;
