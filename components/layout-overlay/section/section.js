import React, {Component} from 'react';

import CardEditor from '../card-editor/card-editor';

// makes sure layout description is consistent
const enforceConstraints = (cards) => {
	return cards.map((card, idx) => {
		if(idx < 1) return card;

		// ensure monotonic columns
		card.column = Math.max(+card.column, +cards[idx - 1].column);
		card.column = Math.min(+card.column, +cards[idx - 1].column + 1);

		// ensure constant widths in columns
		if(+card.column === +cards[idx - 1].column)
			card.width = +cards[idx - 1].width

		return card;
	});
}

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
			const widthDiff = +newCards[idx].width - newCard.width;
			const columnDiff = +newCard.column - newCards[idx].column;

			// bail if we're making a card too narrow
			if(newCard.width < 2) return;

			// on width change, update a neihgboring column width
			if(widthDiff !== 0) {
				const column = +newCards[idx].column;
				const cardToChange = newCards.find((card) => +card.column > column) || newCards.find((card) => +card.column === column - 1)

				// bail if we're making a card too narrow
				if((+cardToChange.width + widthDiff) < 2) return;

				cardToChange.width = +cardToChange.width + widthDiff;
			}

			// on column change, take a width of the target column
			if(columnDiff !== 0) {
				newCard.width = newCards[idx + columnDiff].width;
			}

			newCards[idx] = newCard;

			this.props.onCardsChange(enforceConstraints(newCards));
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
