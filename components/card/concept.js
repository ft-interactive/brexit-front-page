import React, { Component } from 'react';

class Concept extends Component {
	render () {
		const concept = this.props.concept;
		return (
			<article>
				<h2><a href={concept.id}>{concept.name}</a></h2>
			</article>
		);
	}
}

export default Concept;
