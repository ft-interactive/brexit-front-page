const fireTracking = require('../../utils/fire-tracking');
const throttle = require('../../utils/throttle');

const toArray = nodeList => Array.prototype.slice.call(nodeList);

const track = componentPos => fireTracking('oTracking.event', { category: 'page', action: 'scrolldepth', componentPos: componentPos });

const scrollHandlerFactory = components => {
	const componentsViewed = [];
	return () => {
		components.forEach((component, index) => {
			if (component.getBoundingClientRect().top < window.innerHeight && componentsViewed.indexOf(component) === -1) {
				track(index + 1);
				componentsViewed.push(component);
			}
		});
	};
};

const init = () => {
	const components = toArray(document.querySelectorAll('.flexipod'));
	window.addEventListener('scroll', throttle(scrollHandlerFactory(components), 250));
};

module.exports = {
	init
};
