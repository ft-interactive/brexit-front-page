import ODate from 'o-date';
import React, { Component } from 'react';

/**
 * @param {string} date - iso8601
 */
export default class extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dateText: ODate.format(props.date, 'datetime'),
			title: ODate.format(props.date, 'datetime')
		};
	}

	// not called on the initial render, e.g. client only code
	componentWillReceiveProps (props) {
		this.setState({
			dateText: ODate.ftTime(new Date(props.date))
		});
	}

	render () {
		return (
			<time className="card__timestamp" data-o-component="o-date" title={this.state.title} dateTime={this.props.date}>
				{this.state.dateText}
			</time>
		);
	}
}
