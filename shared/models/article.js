const isCommentTag = tag => tag.taxonomy === 'genre' && tag.name === 'Comment';

const propertyEquals = (property, value, object) => object[property] === value;

const getPrimaryTag = ({ primaryTheme, primarySection }) =>
	(primaryTheme && !['organisations', 'regions', 'people'].includes(primaryTheme.taxonomy)) ? primaryTheme : primarySection;

export default (item, opts) => {
	const article = {
		type: 'article',
		id: item.id,
		title: item.title,
		published: item.published,
		lastPublished: item.lastPublished
	};
	const primaryTag = getPrimaryTag({ primaryTheme: item.primaryTheme, primarySection: item.primarySection });
	if (opts.image && item.primaryImage && item.primaryImage.rawSrc) {
		article.image = Object.assign({}, opts.image, { url: item.primaryImage.rawSrc });
	}
	if (opts.showStandfirst) {
		article.standfirst = item.summary;
	}
	if (opts.isPictureStory) {
		article.isPictureStory = opts.isPictureStory;
	}
	if (!opts.hideTag) {
		article.tag = primaryTag;
	}
	if (item.tags && item.tags.some(isCommentTag)) {
		const brand = item.tags.find(propertyEquals.bind(null, 'taxonomy', 'brand'));
		if (item.authors.length || brand) {
			const author = item.authors[0];
			if (author && (author.isBrand || !brand)) {
				article.brand = {
					title: author.name,
					url: author.url,
					headshot: author.headshot
				};
			} else {
				article.brand = {
					title: brand.name,
					url: brand.url
				};
			}
		} else {
			article.brand = {
				title: 'Opinion',
				url: '/stream/sectionsId/MTE2-U2VjdGlvbnM='
			};
		}
		// don't show tags on opinion cards
		article.tag = null;
		article.type = 'opinion';
	}
	if (opts.related && opts.related.show) {
		article.related = Object.assign({
			items: item.relatedContent
				.concat((primaryTag && primaryTag.items) || [])
				.filter(relatedItem => relatedItem.id !== item.id)
				.slice(0, 3)
		}, opts.related);
	}
	if (item.type === 'LiveBlog') {
		article.liveBlog = {
			status: item.status,
			latestUpdate: item.updates[0]
		};
		// no tags/brands on live blogs
		article.tag = null;
		article.brand = null;
	}
	if (opts.isMain) {
		article.isMain = true;
	}

	return article;
};
