import Ad from '../../components/card/ad';

export default ({ flags }) => ({
    id: 'editors-picks',
    title: 'Editor\'s Picks',
    style: 'editors-picks',
    layoutId: flags.frontPageMoreAds ? 'editors-picks-ads' : 'editors-picks',
    size: {
        default: 12
    },
    sidebarComponent: {
        id: 'editors-picks-ad',
        component: Ad,
        isTab: false,
        adClasses: 'ad-placeholder--editors-picks'
    },
    cols: {
        meta: {
            default: 12
        },
        content: {
            default: 12,
            L: flags.frontPageMoreAds ? 8 : null,
            XL: flags.frontPageMoreAds ? 9 : null
        },
        sidebar: flags.frontPageMoreAds ? {
            default: 'hide',
            L: 4,
            XL: 3
        } : null
    }
})
