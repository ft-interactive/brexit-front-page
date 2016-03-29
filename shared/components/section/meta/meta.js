import React, { Component } from 'react';

export default class extends Component {
	render () {
		let metaClass = 'section-meta';
		if (this.props.meta.hide) {
			metaClass += ' n-util-visually-hidden';
		}
		return (
			<div className={metaClass}>
				<h2 className="section-meta__title" dangerouslySetInnerHTML={{ __html: this.props.title }} />
			</div>
		);
	}
}
