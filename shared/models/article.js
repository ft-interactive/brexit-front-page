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

export default (item, opts) => {
	const article = {
		type: 'article',
		id: item.id,
		title: item.title,
		lastPublished: item.lastPublished
	};
	const imageData = getImageData(item);
	if (opts.image && imageData) {
		article.image = Object.assign({}, opts.image, imageData);
		if (article.image.isHeadshot && article.image.srcSet) {
			// headshot images are squares
			article.image.srcSet = squareifyImage(Object.assign({}, article.image.srcSet));
		}
	}
	if (opts.showStandfirst) {
		article.standfirst = item.summary;
	}
	if (opts.isPictureStory) {
		article.isPictureStory = opts.isPictureStory;
	}
	if (!opts.hideTag) {
		article.tag = item.branding || item.primaryTag;
	}
	if (opts.related && opts.related.show) {
		article.related = Object.assign({
			items: item.relatedContent
				.concat((item.primaryTag && item.primaryTag.items) || [])
				.filter(relatedItem => relatedItem.id !== item.id)
				.slice(0, 3)
		}, opts.related);
	}
	if (item.type === 'LiveBlog') {
		article.liveBlog = {
			status: item.status,
			latestUpdate: item.updates[0]
		};
	}
	if (opts.isMain) {
		article.isMain = true;
	}

	return article;
};
