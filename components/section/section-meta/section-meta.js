import React, {Component} from 'react';

class SectionMeta extends Component {


	render () {

		console.log('this.props', this.props);

		return (
			<aside className="section-meta">
				{ this.props.date ? <p className="section-meta__date">{this.props.date}</p> : null }
				<h2 className="section-meta__title">{this.props.title}</h2>
			</aside>
		);
	}
}

export default SectionMeta;
