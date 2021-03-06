const layoutNames = ['S', 'M', 'L', 'XL'];

// Public: Filters a responsive property for use with media queries
// e.g. {default: 1, S: 1, M: 2, L: 2, XL: 2} becomes {default: 1, M: 2}
const mobileFirst = (value) => {
	const cleanValue = {};
	const layouts = ['default'].concat(layoutNames).filter(it => value.hasOwnProperty(it));
	layouts.forEach((l, i) => {
		const previousValue = value[layouts[i - 1]];

		if(value[l] !== null && typeof value[l] !== undefined && value[l] !== previousValue)
			cleanValue[l] = value[l];
	});

	return cleanValue;
};

// BEM style helper for responsive classes
const prefix = (klass, modifier, layout) =>
	[klass, layout, modifier].filter(it => (it !== '' && it !== null && typeof it !== 'undefined')).join('--');

// Public: turns a component name (e.g. foo) and an object like {default: 'val', S: 'other-val'}
// to a string 'foo--val foo--S--other-val'
const responsiveClass = (component, modifier, allModifiers = false) => {
	// this is a crucial step in order not to output ridiculous classes
	const mod = allModifiers ? modifier : mobileFirst(modifier);

	return [
			prefix(component, mod.default),
			...layoutNames
				.filter(it => mod.hasOwnProperty(it))
				.map(l => prefix(component, mod[l], l))
		].join(' ');
};

// Public: turns an object like {default: 'val', S: 'other-val'}
// to a string 'val S--other-val'
const responsiveValue = (value, allValues = false) => responsiveClass('', value, allValues);

export { mobileFirst, responsiveClass, responsiveValue }
