export default () => ({
    id: 'myft',
    title: '<a href="/myft" class="section-meta__link section-meta__link--myft-logo" data-trackable="logo-link"><span class="section-meta__myft-icon">myFT</span></a>',
    style: 'myft',
    layoutId: 'myft',
    size: {
        default: 12
    },
    cols: {
        meta: {
            default: 12
        },
        content: {
            default: 12
        }
    },
    // only the client should render this section (not the server)
    isClient: true
})
