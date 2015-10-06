/*eslint no-unused-vars: 1*/
import React, {Component} from 'react';

class CardStandfirst extends Component {
	render() {
		const article = this.props.article;
		return <p className="card__standfirst">{article.summary}</p>;
	}
}

export default CardStandfirst;
