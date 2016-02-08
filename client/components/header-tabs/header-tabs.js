import oTabs from 'o-tabs';

const init = () => {
	oTabs.init();
	document.querySelector('.header-tabs').addEventListener('oTabs.tabSelect', ev => {
		const panelEls = [].slice.apply(document.querySelectorAll(
			'.header-tabs-panel, .section__column:not(#top-stories-section-content):not(#top-stories-section-aside)'
		));
		if (ev.detail.selected === 1) {
			panelEls.forEach(panelEl => panelEl.setAttribute('aria-hidden', 'true'));
		} else {
			panelEls.forEach(panelEl => panelEl.removeAttribute('aria-hidden'));
		}
	});
};

export default {
	init
}
