import createImageSizes from './create-image-sizes';

export default (colspan, position, widths, extras = {}) =>
	Object.assign({ position, widths, sizes: createImageSizes(colspan, position)}, extras);
