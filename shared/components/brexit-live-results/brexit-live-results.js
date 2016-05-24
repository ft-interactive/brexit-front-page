import React, { Component } from 'react';

export default class extends Component {
	render () {

		const { remainPercentage, leavePercentage } = this.props.data.brexitLiveResults;

		return (
			<div className="brexit-live-results">
				<img className='remain-image' src='https://image.webservices.ft.com/v1/images/raw/ftcms:6ece0586-20f2-11e6-aa98-db1e01fabc0c?source=next&width=700' />
				<div className='remain-result'>Remain {remainPercentage}%</div>
			</div>
		);
	}
}
