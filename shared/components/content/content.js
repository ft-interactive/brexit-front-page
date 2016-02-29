import React, { Component } from 'react';

import ArticleCard from '../card/article';
import ConceptCard from '../card/concept';
import VideoCard from '../card/video';

const getImageData = item => {
	if (item.branding && item.branding.taxonomy === 'authors' && item.branding.headshot) {
		return { imageServiceUrl: item.branding.headshot, isHeadshot: true };
	} else if (item.primaryImage && item.primaryImage.rawSrc) {
		return { url: (item.primaryImage && item.primaryImage.rawSrc) }
	}
	return null;
};

// turn a 16:9 srcSet into squares
const squareifyImage = srcSet =>
	Object.keys(srcSet).reduce((srcSet, breakpoint) => {
		srcSet[breakpoint] = Math.ceil(srcSet[breakpoint] * .5625);
		return srcSet;
	}, srcSet);

const getData = (item, opts) => {
	const data = {
		size: opts.size,
		show: opts.show,
		isTransparent: opts.isTransparent,
		isNew: opts.isNew
	};

	if (item.type === 'Video') {
		Object.assign(data, {
			type: 'video',
			id: item.id,
			title: item.title
		});
	} else if (item.type === 'Concept') {
		Object.assign(data, {
			type: 'concept',
			id: item.id,
			name: item.name,
			items: item.items,
			taxonomy: item.taxonomy,
			url: item.url,
			isFollowing: item.isFollowing
		});
	} else {
		Object.assign(data, {
			type: 'article',
			id: item.id,
			title: item.title,
			lastPublished: item.lastPublished
		});
		const imageData = getImageData(item);
		if (opts.image && imageData) {
			data.image = Object.assign({}, opts.image, imageData);
			if (data.image.isHeadshot && data.image.srcSet) {
				// headshot images are squares
				data.image.srcSet = squareifyImage(Object.assign({}, data.image.srcSet));
			}
		}
		if (opts.showStandfirst) {
			data.standfirst = item.summary;
		}
		if (opts.isPictureStory) {
			data.isPictureStory = opts.isPictureStory;
		}
		if (!opts.hideTag) {
			data.tag = item.branding || item.primaryTag;
		}
		if (opts.related && opts.related.show) {
			data.related = Object.assign({
				items: item.relatedContent
					.concat((item.primaryTag && item.primaryTag.items) || [])
					.filter(relatedItem => relatedItem.id !== item.id)
					.slice(0, 3)
			}, opts.related);
		}
		if (item.type === 'LiveBlog') {
			data.liveBlog = {
				status: item.status,
				latestUpdate: item.updates[0]
			};
		}
		if (opts.isMain) {
			data.isMain = true;
		}
	}

	return data;
};

export default class extends Component {
	render () {
		const item = this.props.items[typeof this.props.itemIndex !== 'undefined' ? this.props.itemIndex : this.props.id];
		if (!item) {
			return null;
		}
		const data = getData(item, this.props);

		switch (data.type) {
			case 'video':
				return <VideoCard {...data} />;
			case 'concept':
				return <ConceptCard {...data} />;
			default:
				return <ArticleCard {...data} />;
		}
	}
}
