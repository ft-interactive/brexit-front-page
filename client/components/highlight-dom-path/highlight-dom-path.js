export default () => {
	const domPath = document.location.hash.split('#').pop();
	if (/^domPath:/.test(domPath)) {
		const selector = domPath
			.replace(/^domPath:/, '')
			.split(' | ')
			.map(part => `[data-trackable="${part}"]`)
			.join(' ');
		[...document.querySelectorAll(selector)]
			.forEach(el => el.classList.add('dom-path-highlight'));
	}

}
