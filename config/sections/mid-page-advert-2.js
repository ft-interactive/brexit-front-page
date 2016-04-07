export default ({data}) => {
	let desktopAds;
	switch(data.adsLayout) {
		case 'billboards':
			desktopAds='SuperLeaderboard,Responsive';
			break;
		case 'superleaders':
			desktopAds='Billboard,Responsive';
			break;
		default:
			desktopAds='SuperLeaderboard,Leaderboard,Responsive';
	}
	return {
		size: {
			default: 12
		},
		raw: `<div data-trackable="ad"
			class="mid-page-2-advert o-ads"
			data-o-ads-name="mid"
			data-o-ads-targeting="pos=mid;"
			data-o-ads-formats-default="Responsive,MediumRectangle"
			data-o-ads-formats-small="Responsive,MediumRectangle"
			data-o-ads-formats-medium="Leaderboard,Responsive"
			data-o-ads-formats-large="SuperLeaderboard,Leaderboard,Responsive"
			data-o-ads-formats-extra="${desktopAds}"
			data-o-ads-center="true"
			data-o-ads-lazy-load="true"
			aria-hidden="true"></div>`
	}
};
