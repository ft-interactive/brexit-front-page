import fireTracking from '../../utils/fire-tracking';
import throttle from '../../utils/throttle';

const toArray = nodeList => Array.prototype.slice.call(nodeList);

const track = (dataTrackable, componentPos) => {
	fireTracking('oTracking.event', { category: 'page', action: 'scrolldepth', dataTrackable, componentPos });
}

const scrollHandlerFactory = () => {
	const componentsViewed = [];
	return () => {
		toArray(document.querySelectorAll('.js-track-scroll-event'))
			.forEach((component, index) => {
				const dataTrackable = component.getAttribute('data-trackable');
				if (component.getBoundingClientRect().top < window.innerHeight && componentsViewed.indexOf(dataTrackable) === -1) {
					track(dataTrackable, index + 1);
					componentsViewed.push(dataTrackable);
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
