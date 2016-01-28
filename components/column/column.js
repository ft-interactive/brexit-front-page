import React, {Component} from 'react';
import colspanToString from '../../client/utils/colspan';

class Column extends Component {

	render () {
		if(!this.props.components) {
			return null;
		}

		const classes = [
			'column',
			this.props.className ? this.props.className : ''
		]

		const renderComponents = (components) => components.map((component, index) => <component.type {...component} key={'column-child_' + index} />);

		return (
			<div className={classes.join(' ')} data-o-grid-colspan={colspanToString(this.props.colspan)}>
				{renderComponents(this.props.components)}
			</div>
		);
	}
}

export default Column;
