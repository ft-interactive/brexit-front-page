import Layout from '../../../components/layout/main';
import LayoutOverlay from '../../../components/layout-overlay/main';

const init = flags => {
    if (flags.get('frontPageLayoutTool')) {
        const layoutContainer = document.getElementById('main-body');
        if (layoutContainer) {
            const mainContent = layoutContainer.getAttribute('data-main-content');
            if (mainContent) {
                Layout.init(layoutContainer, JSON.parse(mainContent));
                const layoutOverlayContainer = document.getElementById('layout-overlay-container');
                LayoutOverlay.init(layoutOverlayContainer, (newLayout) => {
                    Layout.render(newLayout);
                    LayoutOverlay.render(newLayout);
                });
            }
        }
    }
};

export default {
    init
}
