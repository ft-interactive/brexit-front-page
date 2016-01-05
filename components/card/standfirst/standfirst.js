import React, {Component} from 'react';
import {responsiveValue} from '../helpers';

export default class Standfirst extends Component {
	render () {
		const article = this.props.article;

		return (
			<p className="card__standfirst"
				data-size={responsiveValue(this.props.size)}
				data-show={responsiveValue(this.props.show)}>
				{article.summary}
			</p>
		);
	}
}
