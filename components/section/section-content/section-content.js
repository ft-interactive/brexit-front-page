import React, {Component} from 'react';

import Content from '../../card/content';
import Concept from '../../card/concept';
import Video from '../../card/video';

export default class SectionContent extends Component {
	render () {
		const items = this.props.items.slice();
		const layout = this.props.layout(items);
		let storyIndex = 0;

		const renderComponents = (components) => components.map((component, index) => {
			return <component.type {...component} key={this.props.id + '_child' + index} />
		});

		//Assign content to cards

		const assignContent = (components) => components.map((component) => {
			if([Content, Concept, Video].some(type => type === component.cardType)) {
				component.itemIndex = component.itemIndex || storyIndex++;
				component.item = items[component.itemIndex];
			} else if (component.components && component.components.length) {
				//If this is a row or column, keep adding items to their children
				assignContent(component.components);
			}
		});

		assignContent(layout);

		return (
			<div>
				{renderComponents(layout)}
			</div>
		)
	}
}
