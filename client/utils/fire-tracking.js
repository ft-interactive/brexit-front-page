module.exports = (name, data) => {
	const event = (() => {
		try {
			return new CustomEvent(name, { bubbles: true, cancelable: true, detail: data });
		} catch (e) {
			return CustomEvent.initCustomEvent(name, true, true, data);
		}
	})();

	document.body.dispatchEvent(event);
};
