import React, { Component } from 'react';

import { Article as ArticleCard, Concept as ConceptCard, Video as VideoCard } from '../card';
import createModel from '../../models';

const getModel = (item, opts, { flags = {} }) => {
	const model = {
		size: opts.size,
		show: opts.show,
		isTransparent: opts.isTransparent,
		isNew: opts.isNew
	};
	Object.assign(model, createModel(item, opts, { flags }));

	return model;
};

export default class extends Component {
	render () {
		const item = this.props.items[typeof this.props.itemIndex !== 'undefined' ? this.props.itemIndex : this.props.id];
		if (!item) {
			return null;
		}
		const model = getModel(item, this.props, { flags: this.props.flags });

		switch (model.type) {
			case 'video':
				return <VideoCard {...model} />;
			case 'concept':
				return <ConceptCard {...model} />;
			default:
				return <ArticleCard {...model} />;
		}
	}
}
