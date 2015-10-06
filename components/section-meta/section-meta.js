import React, {Component} from 'react';
import dateFormat from 'dateformat';

class SectionMeta extends Component {
	render() {
		const displayDate = dateFormat(new Date, 'dS mmmm yyyy');
		const dateEl = this.props.showDate === false ? '' : <p className="section-meta__date">{displayDate}</p>;
		return (
			<aside className="section-meta">
				{dateEl}
				<h2 className="section-meta__title">{this.props.title}</h2>
			</aside>
		);
	}
}

export default SectionMeta;
