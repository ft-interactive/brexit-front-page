import React, {Component} from 'react';

export default class CardEditor extends Component {
	change (key) {
		return (e) => {
			const newValue = e.target.value;
			let newCard = Object.assign({}, this.props.card);
			if(newValue === 'none')
				delete newCard[key];
			else
				newCard[key] = (newValue === 'yes' ? true : newValue);

			this.props.onChange(newCard);
		};
	}

	render () {
		return (
			<form className="card-editor">
				<p className="card-editor__overview">
					<label>Column</label>
					<input
						type="number"
						data-trackable="card-column"
						value={this.props.card.column}
						min={this.props.minColumn}
						max={this.props.maxColumn}
						onChange={this.change('column')} />
					{ this.props.showWidth ? <label>Width</label> : null }
					{ this.props.showWidth ?
						<input
							type="number"
							data-trackable="card-width"
							value={this.props.card.width || 2}
							min="2"
							max={this.props.card.column > 0 ? 4 : 6}
							onChange={this.change('width')} />
						: null }
				</p>
				<p>
					<label>Text size</label>
					<select data-trackable="card-text-size" value={this.props.card.size} onChange={this.change('size')}>
						<option value="large">Large</option>
						<option value="medium">Medium</option>
						<option value="small">Small</option>
						<option value="tiny">Tiny</option>
					</select>
				</p>
				{ this.props.card.size === 'medium' ?
				<p>
					<label>Stand first</label>
					<select data-trackable="card-stand-first" value={this.props.card.standFirst || 'none'} onChange={this.change('standFirst')}>
						<option value="yes">Shown</option>
						<option value="none">Hidden</option>
					</select>
				</p> : null }
				<p>
					<label>Image</label>
					<select data-trackable="card-image" value={this.props.card.image || 'none'} onChange={this.change('image')}>
						<option value="always">Always</option>
						<option value="desktop">Desktop only</option>
						<option value="none">Hidden</option>
					</select>
				</p>
				<p>
					<label>Related Stories</label>
					<input type="number" data-trackable="card-related-stories" value={this.props.card.related || 0} onChange={this.change('related')} />
				</p>
			</form>
		);
	}
}
