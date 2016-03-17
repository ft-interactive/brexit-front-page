import React, { Component } from 'react';

export default class extends Component {
	render () {
		return (
			<div className="section-meta">
				<h2 className="section-meta__title" dangerouslySetInnerHTML={{ __html: this.props.title }} />
			</div>
		);
	}
}
