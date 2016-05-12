import React, { Component } from 'react';

export default class extends Component {
	render () {
		const { remainPercentage, leavePercentage } = this.props.data;

		return (
			<div className="brexit-coverage">
				<h1>LIVE BREXIT COVERAGE!</h1>
				<li>Remain: {remainPercentage}%</li>
				<li>Leave: {leavePercentage}%</li>
			</div>
		);
	}
}
