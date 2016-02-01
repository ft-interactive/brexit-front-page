import React, { Component} from 'react';

import VideoCard from './video';
import ConceptCard from './concept';
import ContentCard from './card';

const getImageUrl = item =>
    (item.branding && item.branding.taxonomy === 'authors' && item.branding.headshot) ?
        item.branding.headshot :
        (item.primaryImage && item.primaryImage.rawSrc);

class Content extends Component {
    render () {
        const item = this.props.items[this.props.itemIndex || this.props.id];
        const attrs = {
            title: item.title,
            id: item.id,
            size: this.props.size,
            show: this.props.show
        };

        const imageUrl = getImageUrl(item);
        if (this.props.image && imageUrl) {
            attrs.image = Object.assign({}, this.props.image, { url: imageUrl });
        }

        if (this.props.showStandfirst) {
            attrs.standfirst = item.summary;
        }

        if (!this.props.hideTag && item.primaryTag) {
            attrs.tag = item.primaryTag;
        }

        if (this.props.showRelated) {
            attrs.related = item.relatedContent;
        }

        if (item.renditions) {
            return <VideoCard {...attrs} />;
        } else if (item.taxonomy) {
            return <ConceptCard {...attrs} />;
        } else {
            return <ContentCard {...attrs} />;
        }
    }
}

export default Content;
