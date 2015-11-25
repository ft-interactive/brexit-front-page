import React, {Component} from 'react';
import {responsiveClass, responsiveValue} from '../helpers';

export default class Standfirst extends Component {
	render () {
		const article = this.props.article;

		return (
			<p className={'card__standfirst ' + responsiveClass('card__standfirst', this.props.size)}
				 data-standfirst-show={responsiveValue(this.props.show)}>
				{article.summary}
			</p>
		);
	}
}
