import React, {Component} from 'react';

export default class Tag extends Component {
	render() {
		const tag = this.props.tag;
		return (
			<a className={'card__tag card__tag--' + tag.taxonomy + ' card__tag--' + this.props.size} href={tag.href} data-trackable="tag">
				{tag.name}
			</a>
		);
	}
}
