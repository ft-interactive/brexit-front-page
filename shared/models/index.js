import article from './article';
import concept from './concept';
import video from './video';

export { article, concept, video };

export default (item, opts, { flags = {} }) => {
	const model = {
		size: opts.size,
		show: opts.show,
		isTransparent: opts.isTransparent,
		isNew: opts.isNew
	};

	if (item.type === 'Video') {
		Object.assign(model, video(item, opts));
	} else if (item.type === 'Concept') {
		Object.assign(model, concept(item, opts));
	} else {
		Object.assign(model, article(item, opts, { flags }));
	}

	return model;
}
