import React, {Component} from 'react';

export default class Standfirst extends Component {
	render () {
		const article = this.props.article;

		return <p className={'card__standfirst card__standfirst--' + this.props.style + ' card__standfirst--' + this.props.size}>
			{article.summary}
		</p>;
	}
}
