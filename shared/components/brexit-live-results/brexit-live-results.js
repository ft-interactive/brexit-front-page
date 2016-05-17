import React, { Component } from 'react';

export default class extends Component {
	render () {

		const { remainPercentage, leavePercentage } = this.props.data.brexitLiveResults;

		return (
			<div className="brexit-live-results">
				<h1>LIVE BREXIT RESULTS!</h1>
				<li>Remain: {remainPercentage}%</li>
				<li>Leave: {leavePercentage}%</li>
			</div>
		);
	}
}
