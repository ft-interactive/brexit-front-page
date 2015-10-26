import React, {Component} from 'react';
import {responsiveClass} from '../helpers';

export default class Tag extends Component {
	render () {
		const tag = this.props.tag;
		return (
			<p className={'card__tag card__tag--' + tag.taxonomy + ' ' + responsiveClass('card__tag', this.props.size)}>
				{tag.name}
			</p>
		);
	}
}
