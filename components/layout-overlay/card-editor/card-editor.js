import React, {Component} from 'react';

export default class CardEditor extends Component {
	render() {
		return (
			<form className="card-editor">
				<p className="card-editor__overview">
					<label>Column</label>
					<input
						type="number"
						data-trackable="card-column"
						value={this.props.card.column}
						min={this.props.minColumn}
						max={this.props.maxColumn} />
					{ this.props.showWidth ? <label>Width</label> : null }
					{ this.props.showWidth ? <input type="number" data-trackable="card-width" value={this.props.card.width || 2} /> : null }
				</p>
				<p>
					<label>Tag size</label>
					<select data-trackable="card-tag-size" value={this.props.card.tagSize}>
						<option value="large">Large</option>
						<option value="medium">Medium</option>
						<option value="small">Small</option>
					</select>
				</p>
				<p>
					<label>Title size</label>
					<select data-trackable="card-title-size" value={this.props.card.titleSize}>
						<option value="large">Large</option>
						<option value="medium">Medium</option>
						<option value="small">Small</option>
						<option value="tiny">Tiny</option>
					</select>
				</p>
				<p>
					<label>Stand first</label>
					<select data-trackable="card-stand-first" value={this.props.card.standFirst || 'none'}>
						<option value="large">Large</option>
						<option value="medium">Medium</option>
						<option value="none">Hidden</option>
					</select>
				</p>
				<p>
					<label>Image</label>
					<select data-trackable="card-image" value={this.props.card.image || 'none'}>
						<option value="always">Always</option>
						<option value="desktop">Desktop only</option>
						<option value="none">Hidden</option>
					</select>
				</p>
				<p>
					<label>Related Stories</label>
					<input type="number" data-trackable="card-related-stories" value={this.props.card.related || 0} />
				</p>
			</form>
		);
	}
}
