import fireTracking from '../../utils/fire-tracking';
import throttle from '../../utils/throttle';

const toArray = nodeList => Array.prototype.slice.call(nodeList);

const track = (componentId, componentPos) => {
	fireTracking('oTracking.event', { category: 'page', action: 'scrolldepth', componentId, componentPos });
};

const scrollHandlerFactory = () => {
	const componentsViewed = [];
	return () => {
		toArray(document.querySelectorAll('.js-track-scroll-event'))
			.forEach((component, index) => {
				const componentId = component.getAttribute('id');
				if (component.getBoundingClientRect().top < window.innerHeight && componentsViewed.indexOf(componentId) === -1) {
					track(componentId, index + 1);
					componentsViewed.push(componentId);
				}
			});
	};
};

export default () => {
	if (!/spoor-id=0/.test(document.cookie)) {
		return false;
	}
	const scrollHandler = scrollHandlerFactory();
	window.addEventListener('scroll', throttle(scrollHandler, 250));
	// fire off an initial tracking
	scrollHandler();
}
