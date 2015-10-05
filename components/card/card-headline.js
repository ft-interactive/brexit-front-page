/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';
import {CardTag, CardTitle} from '../card-components/card-components';

class CardHeadline extends Component {
	render() {
		const article = this.props.article;
		return (
			<article className="card card--headline" data-trackable="card">
				<CardTag article={article} />
				<CardTitle article={article} />
			</article>
		);
	}
}

export default CardHeadline;
