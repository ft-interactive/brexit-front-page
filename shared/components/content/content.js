import React, { Component} from 'react';

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
const squareifyImage = srcSet => {
	console.log('##### SQUAREIFYING #####');
	console.log(srcSet);
	return Object.keys(srcSet).reduce((srcSet, breakpoint) => {
		console.log(`Before: ${srcSet[breakpoint]}`);
		console.log(`After: ${Math.ceil(srcSet[breakpoint] * .5625)}`);
		srcSet[breakpoint] = Math.ceil(srcSet[breakpoint] * .5625);
		return srcSet;
	}, srcSet);
}

const getData = (item, opts) => {
	const data = {
		size: opts.size,
		show: opts.show
	};

	// if renditions, assume it's a video
	if (item.renditions) {
		Object.assign(data, {
			type: 'video',
			id: item.id,
			title: item.title
		});
	} else if (item.taxonomy) { // assume it's a concept
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
			title: item.title
		});
		const imageData = getImageData(item);
		if (opts.image && imageData) {
			data.image = Object.assign({}, opts.image, imageData);
			if (data.image.isHeadshot && data.image.srcSet) {
				// headshot images are squares
				// TODO: fix in prod
				data.image.srcSet = squareifyImage(data.image.srcSet);
			}
		}
		if (opts.showStandfirst) {
			data.standfirst = item.summary;
		}
		if (!opts.hideTag && item.primaryTag) {
			data.tag = item.primaryTag;
		}
		if (opts.showRelated) {
			data.related = item.relatedContent
				.concat((item.primaryTag && item.primaryTag.items) || [])
				.slice(0, 3);
		}

		if (item.contentType === 'LiveBlog') {
			data.liveBlog = {
				status: item.status,
				latestUpdate: item.updates[0]
			};
		}
	}

	return data;
};

class Content extends Component {
	render () {
		const item = this.props.items[this.props.itemIndex || this.props.id];
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

export default Content;
