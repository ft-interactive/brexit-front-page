import React, {Component} from 'react';

import {responsiveValue} from './helpers';
import colspanToString from '../../client/utils/colspan';

import Tag from './tag/tag'
import Title from './title/title'
import Image from './image/image'
import Standfirst from './standfirst/standfirst'
import Related from './related/related';

class Article extends Component {
	render () {
		if(!this.props.item) {
			return null;
		}
		const article = this.props.item;
		const imageSrcSet = this.props.imageSrcSet;
		const showCard = responsiveValue(this.props.show);
		const showStandFirst = responsiveValue(this.props.standFirst);
		const showImg = responsiveValue(this.props.image);
		const hideTag = this.props.hideTag;
		const isLandscape = responsiveValue(this.props.landscape);

		const classes = [
			'card',
			hideTag ? 'hide-tag' : ''
		]

		const attrs = {
			className: classes.join(' '),
			'data-trackable': 'card',
			'data-size': this.props.size 
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

		if (this.props.colspan) {
			Object.assign(attrs, { 'data-o-grid-colspan': colspanToString(this.props.colspan) });
		}

		return (
			<article {...attrs}>
				<div>
					{(article.primaryTag && article.primaryTag.taxonomy !== 'authors' && !hideTag) ? <Tag tag={article.primaryTag}/> : null}
					<Title title={article.title} href={'/content/' + article.id}/>
					{(article.primaryTag && article.primaryTag.taxonomy === 'authors' && !hideTag) ? <Tag tag={article.primaryTag} /> : null}
				</div>
				{(article.summary && showStandFirst.includes('true')) ? <Standfirst article={article} show={this.props.showStandFirst} /> : null}
				{(article.primaryImage && showImg.includes('true')) ?
					<Image 	article={article}
							imageSrcSet={imageSrcSet}
							stickToBottom={this.props.imageStick}
							yCentre={this.props.imgYCentre}/> :
					null
				}
				{this.props.showRelated.length > 0 ? <Related articles={article.relatedContent} show={this.props.showRelated} /> : null}
			</article>
		);
	}
}

export default Article;
