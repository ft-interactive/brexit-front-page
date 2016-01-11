import React, {Component} from 'react';

export default class Tag extends Component {
	render () {
		const tag = this.props.tag;
		return (
			<p className={'card__tag card__tag--' + tag.taxonomy}>
				<a className="card__tag__link" href={tag.url} data-trackable="primary-tag">
					{tag.name}
				</a>
			</p>
		);
	}
}
