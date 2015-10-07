import React, {Component} from 'react';

class Ad extends Component {
	render() {
		return (
			<article className="card card--ad" data-trackable="card">
				<img className="ad" src="https://s1.2mdn.net/viewad/4743324/MII_FT_Oct_Reuters_banners1_300x250_E.gif" width="300" height="250" />
			</article>
		);
	}
}

export default Ad;
