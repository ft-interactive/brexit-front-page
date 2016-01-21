
const requestAnimationFrame = (fn, args) => {
	if (window.requestAnimationFrame) {
		window.requestAnimationFrame(() => fn.apply(null, args));
	} else {
		fn(arguments);
	}
};

module.exports = (fn, threshold) => {
	let lastFired;
	let timer;

	return (...args) => {
		if (timer) {
			return;
		}
		const now = +new Date();
		if (!lastFired || lastFired + threshold < now) {
			requestAnimationFrame(fn, args);
			lastFired = now;
		} else {
			const delay = threshold - (now - lastFired);
			timer = setTimeout(() => {
				timer = null;
				requestAnimationFrame(fn, args);
				lastFired = +new Date();
			}, delay);
		}
	}
};
