import React, { Component} from 'react';

import VideoCard from './video';
import ConceptCard from './concept';
import ArticleCard from './card';

const getImageData = item => {
    if (item.branding && item.branding.taxonomy === 'authors' && item.branding.headshot) {
        return { imageServiceUrl: item.branding.headshot, isHeadshot: true };
    } else if (item.primaryImage && item.primaryImage.rawSrc) {
        return { url: (item.primaryImage && item.primaryImage.rawSrc) }
    }
    return null;
};

const getData = (item, opts) => {
    const data = {
        size: opts.size,
        show: opts.show
    };

    if (item.renditions) {
        Object.assign(data, {
            type: 'video',
            id: item.id,
            title: item.title
        });
    } else if (item.taxonomy) {
        Object.assign(data, {
            type: 'concept',
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
        }
        if (opts.showStandfirst) {
            data.standfirst = item.summary;
        }
        if (!opts.hideTag && item.primaryTag) {
            data.tag = item.primaryTag;
        }
        if (opts.showRelated) {
            data.related = item.relatedContent;
        }
    }

    return data;
};

class Content extends Component {
    render () {
        const item = this.props.items[this.props.itemIndex || this.props.id];
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
