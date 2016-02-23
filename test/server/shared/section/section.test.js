require('../utils/dom');
const stub = require('../utils/stub-component');
const proxyquire = require('proxyquire').noCallThru();
import chai from 'chai';
chai.should();
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const SectionNode = proxyquire('../../../../shared/components/section/section', {
	'./content/content': stub,
	'./meta/meta': stub,
	'./sources/sources': stub
});

describe('SectionNode', () => {

	const props = {
		cols: {
			content: { },
			sidebar: { }
		},
		id: 'sectionNodeId',
		sidebarComponent: {
			id: 'sidebarComponentId',
			component: stub
		}
	}

	it('should render section component with "section" class if correct data provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ { main: [''] } }
			{...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.not.throw();
	});

	it('should not render section component if no content provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ null }
			{...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.throw();
	});

	it('should not render section component if content without main attribute provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ { main: null } }
			{...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.throw();
	});

	it('should not render section component if content with empty main attribute provided', () => {
		const section = TestUtils.renderIntoDocument(
			<SectionNode
			content={ { main: [] } }
			{...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section')).should.throw();
	});
});
