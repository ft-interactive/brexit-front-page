import React, {Component} from 'react';

import CardEditor from '../card-editor/card-editor';

export default class Section extends Component {
	constructor(props) {
		super(props);

		this.state = {expanded: false};
	}

	toggle(e) {
		e.preventDefault();
		this.setState({expanded: !this.state.expanded});
	}

	render() {
		const cardEditors = this.props.cards.map(card => {
			return (<li>
				<CardEditor card={card} />
			</li>)
		})

		return (
			<div className={'section-editor section-editor--' + (this.state.expanded ? 'expanded' : 'collapsed')}>
				<h3>
					<a href="" data-trackable="section-editor-toggle" onClick={this.toggle.bind(this)}>
						{this.props.title}
					</a>
				</h3>
				<ul className='section-editor__editor'>
					{cardEditors}
				</ul>
			</div>
		);
	}
}
