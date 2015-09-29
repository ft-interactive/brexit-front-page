/* eslint no-unused-vars: 1 */
import {init as initDate, format} from 'o-date';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const dateFormat = 'h:mm a';

const linkHref = (id) => (id ? '/content/' + id.split('/').slice(-1)[0] : '');

class Article extends Component {
	componentDidMount() {
		const el = ReactDOM.findDOMNode(this);
		initDate(el);
	}

	render() {
		const {id, title, lastPublished} = this.props.article;

		return (
			<article role='article' aria-labelledby={`${id}-title`}>
				<a href={linkHref(id)} tabIndex='0' data-trackable='feed-link'>
					<h2 id={`${id}-title`}>{title}</h2>
					<span>
						<time data-o-component='o-date' className='o-date' dateTime={lastPublished} aria-live='off'>
							{format(lastPublished, dateFormat)}
						</time>
					</span>
				</a>
			</article>
		);
	}
}

export default Article;
