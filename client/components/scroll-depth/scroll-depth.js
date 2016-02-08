import fireTracking from '../../utils/fire-tracking';
import throttle from '../../utils/throttle';
import getDomPath from 'n-instrumentation/src/utils/getDomPath';

const toArray = nodeList => Array.prototype.slice.call(nodeList);

const track = (componentEl, componentPos) =>
	fireTracking('oTracking.event', { category: 'page', action: 'scrolldepth', componentPos, domPath: getDomPath(componentEl, []) });

const scrollHandlerFactory = components => {
	const componentsViewed = [];
	return () => {
		components.forEach((component, index) => {
			if (component.getBoundingClientRect().top < window.innerHeight && componentsViewed.indexOf(component) === -1) {
				track(component, index + 1);
				componentsViewed.push(component);
			}
		});
	};
};

const init = () => {
	const components = toArray(document.querySelectorAll('.flexipod, .section'));
	const scrollHandler = scrollHandlerFactory(components);
	window.addEventListener('scroll', throttle(scrollHandler, 250));
	// fire off an initial tracking
	scrollHandler();
};

export default {
	init
};
