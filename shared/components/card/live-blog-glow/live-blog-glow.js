import React, { Component } from 'react';
import dateFormat from 'dateformat';

/**
 * @param {string} status [InProgress|Closed|ComingSoon]
 * @param {Object} latestUpdate
 * @param {string} latestUpdate.date
 */
export default class extends Component {
	render () {
		let text;
		switch (this.props.status) {
			case 'InProgress':
				text = 'last post';
				break;
			case 'Closed':
				text = 'liveblog closed';
				break;
			case 'ComingSoon':
				text = 'coming soon'
		};

		return (
			<div className="card__footer">
				<i className="liveblog__live-indicator"><i className="glow"></i></i>
				<span>{text} </span>
				{['InProgress', 'Closed'].indexOf(this.props.status) > -1 ?
					<time
						data-o-component="o-date"
						className="o-date"
						dateTime={dateFormat(this.props.latestUpdate.date, 'isoUtcDateTime')}>
						{dateFormat(this.props.latestUpdate.date, 'isoUtcDateTime')}
					</time> :
					null
				}
			</div>
		);
	}
}
