import Section from '../../../components/section/main';
import LayoutOverlay from '../../../components/layout-overlay/main';


const init = flags => {
    if (flags.get('frontPageLayoutTool')) {
        let sections = document.querySelectorAll('[data-section-content]');

        if (sections && sections.length) {
            sections = Array.from(sections);
            sections.forEach(section => Section.init(section, true));
            const layoutOverlayContainer = document.getElementById('layout-overlay-container');
            LayoutOverlay.init(layoutOverlayContainer, (newLayout) => {
                sections.forEach(section => Section.render(section, newLayout));
                LayoutOverlay.render(newLayout);
            });
        }
    }
};

export default {
    init
}
