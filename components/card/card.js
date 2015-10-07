import React, {Component} from 'react';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

import Ad from './ad';

class Card extends Component {
	render() {
		const article = this.props.article;

		const tagSize = this.props.tagSize;
		const titleSize = this.props.titleSize;
		const standFirst = this.props.standFirst;
		const image = !!this.props.image && article.primaryImage;
		const related = !!this.props.related && article.relatedContent && article.relatedContent.length > 0;

		if(this.props.ad) return <Ad />;

		return (
			<article className="card" data-trackable="card">
				<Tag tag={article.primaryTag} size={tagSize}/>
				<Title title={article.title} href={'/content/' + article.id} size={titleSize} />
				{standFirst ? <Standfirst article={article} style={article.primaryTag.taxonomy} size={this.props.tagSize} /> : null}
				{image ? <Image article={article} size={this.props.type} /> : null}
				{related ? <Related articles={article.relatedContent} /> : null}
			</article>
		);
	}
}

export default Card;
