import React, { Component } from 'react';

/**
 * @param {string} standfirst
 */
export default class extends Component {
	render () {
		return (
			<p className="card__standfirst">{this.props.standfirst}</p>
		);
	}
}
