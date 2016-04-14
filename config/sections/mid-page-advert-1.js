export default ({flags}) => ({
	size: {
		default: 12
	},
	raw: `<div data-trackable="ad"
		class="mid-page-1-advert o-ads advert ${flags.adLoadingImprovements ? 'advert--full-bleed advert--transition' : ''}"
		data-o-ads-name="top-below-header"
		data-o-ads-targeting="pos=top;"
		data-o-ads-formats-default="MediumRectangle,Responsive"
		data-o-ads-formats-small="MediumRectangle,Responsive"
		data-o-ads-formats-medium="false"
		data-o-ads-formats-large="false"
		data-o-ads-formats-extra="false"
		data-o-ads-lazy-load="true"
		data-o-ads-center="true"
		aria-hidden="true"></div>`
})
