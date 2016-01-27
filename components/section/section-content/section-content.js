import React, {Component} from 'react';

import Card from '../../card/card';
import Content from '../../card/content';
import Concept from '../../card/concept';
import Video from '../../card/video';

import colspanToString from '../../../client/utils/colspan';


export default class SectionContent extends Component {
	render () {
		const items = this.props.items.slice();
		const layout = this.props.layout(items);
		let storyIndex = 0;

		const renderComponents = (components) => components.map((component, index) => {
			return <component.type {...component} key={this.props.key + 'child_' + index} />
		});

		//Assign content to cards

		const assignContent = (components) => components.map((component) => {
			console.log('component', component);
			if([Content, Concept, Video].some(type => type === component.cardType)) {
				console.log('setting stuff for component', component);
				component.itemIndex = component.itemIndex || storyIndex++;
				component.item = items[component.itemIndex];
				console.log('setting component item', component.item);
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
