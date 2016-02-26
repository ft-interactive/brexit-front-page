import oTabs from 'o-tabs';

const toArray = els => [].slice.apply(els);

export default () => {
	oTabs.init();
	document.querySelector('.header-tabs').addEventListener('oTabs.tabSelect', ev => {
		const sectionEls = toArray(document.querySelectorAll(
			'.section__column:not(#top-stories-section-content):not(#top-stories-section-aside)'
		));
		if (ev.detail.selected === 1) {
			sectionEls.forEach(panelEl => panelEl.setAttribute('aria-hidden', 'true'));
		} else {
			sectionEls.forEach(panelEl => panelEl.removeAttribute('aria-hidden'));
		}
	});
}
