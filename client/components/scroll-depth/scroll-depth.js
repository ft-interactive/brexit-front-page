import fireTracking from '../../utils/fire-tracking';
import throttle from '../../utils/throttle';
import getDomPath from 'n-instrumentation/src/utils/getDomPath';

const toArray = nodeList => Array.prototype.slice.call(nodeList);

const track = (componentEl, componentPos) => {
	const domPathTokens = getDomPath(componentEl, []);
	fireTracking('oTracking.event', { category: 'page', action: 'scrolldepth', componentPos, domPathTokens: domPathTokens, domPath: domPathTokens.join(' | ') });
}

const scrollHandlerFactory = () => {
	const componentsViewed = [];
	return () => {
		toArray(document.querySelectorAll('.js-track-scroll-event'))
			.forEach((component, index) => {
				const componentId = component.getAttribute('data-trackable');
				if (component.getBoundingClientRect().top < window.innerHeight && componentsViewed.indexOf(componentId) === -1) {
					track(component, index + 1);
					componentsViewed.push(componentId);
				}
			});
	};
};

const init = () => {
	const scrollHandler = scrollHandlerFactory();
	window.addEventListener('scroll', throttle(scrollHandler, 250));
	// fire off an initial tracking
	scrollHandler();
};

export default {
	init
};
