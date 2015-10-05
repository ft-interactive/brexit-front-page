/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import dateFormat from 'dateformat';

class SectionMeta extends Component {
	render() {
		const displayDate = dateFormat(new Date, 'dS mmmm yyyy');
		return (
			<aside className="section-meta">
				<p className="section-meta__date">{displayDate}</p>
				<h2 className="section-meta__title">{this.props.title}</h2>
			</aside>
		);
	}
}

export default SectionMeta;
