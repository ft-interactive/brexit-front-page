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

	update(idx) {
		return (newCard) => {
			const newCards = this.props.cards.slice();
			newCards[idx] = newCard;

			this.props.onCardsChange(newCards);
		};
	}

	render() {
		const cardEditors = this.props.cards.map((card, idx) => {
			const previousCard = this.props.cards[Math.max(idx - 1)];
			const previousColumn = previousCard ? previousCard.column : -1;
			const firstOfColumn = (card.column > previousColumn);

			return (<li>
				<CardEditor card={card} minColumn={previousColumn} maxColumn={previousColumn + 1} showWidth={firstOfColumn} onChange={this.update(idx)}/>
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
