require('../utils/dom');
const stub = require('../utils/stub-component');
const proxyquire = require('proxyquire').noCallThru();
import chai from 'chai';
chai.should();
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const SectionNode = proxyquire('../../../../shared/components/section/node', {
	'./section-content/section-content': stub,
	'./section-meta/section-meta': stub,
	'./section-sources/section-sources': stub
});

describe('SectionNode', () => {

	const cols = {
		content: { },
		sidebar: { }
	}

	const sidebarComponent = {
		id: 'sidebarComponentId',
		component: stub
	}

	it('should render section component with "section" class if correct data provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ { main: [''] } }
			cols={cols}
			id='sectionNodeId'
			sidebarComponent={sidebarComponent} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.not.throw();
	});

	it('should not render section component if no content provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ null }
			cols={cols}
			id='sectionNodeId'
			sidebarComponent={sidebarComponent} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.throw();
	});

	it('should not render section component if content without main attribute provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ { main: null } }
			cols={cols}
			id='sectionNodeId'
			sidebarComponent={sidebarComponent} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.throw();
	});

	it('should not render section component if content with empty main attribute provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ { main: [] } }
			cols={cols}
			id='sectionNodeId'
			sidebarComponent={sidebarComponent} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.throw();
	});
});
