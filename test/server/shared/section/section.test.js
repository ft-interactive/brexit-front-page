require('../utils/dom');
const stub = require('../utils/stub-component');
const proxyquire = require('proxyquire').noCallThru();
import chai from 'chai';
chai.should();
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Section = proxyquire('../../../../shared/components/section/section', {
	'./content/content': stub,
	'./meta/meta': stub,
	'./sources/sources': stub
});

describe('Section', () => {

	const props = {
		id: 'section-node-id',
		style: 'section-node-style',
		cols: {
			content: { },
			sidebar: { }
		},
		sidebarComponent: {
			id: 'sidebar-component-id',
			component: stub
		}
	}

	it('should render section component if correct data provided', () => {
		const section = TestUtils.renderIntoDocument(
			<Section data={ { content: [''] } } {...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithTag(section, 'section')).should.not.throw();
	});

	it('should not render section component if no content provided', () => {
		const section = TestUtils.renderIntoDocument(
			<Section data={ null } {...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithTag(section, 'section')).should.throw();
	});

	it('should not render section component if content without main attribute provided', () => {
		const section = TestUtils.renderIntoDocument(
			<Section data={ { content: null } } {...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithTag(section, 'section')).should.throw();
	});

	it('should not render section component if content with empty main attribute provided', () => {
		const section = TestUtils.renderIntoDocument(
			<Section data={ { content: [] } } {...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithTag(section, 'section')).should.throw();
	});

	it('should render section component with "section--section-node-style" class if correct data provided', () => {
		const section = TestUtils.renderIntoDocument(
			<Section data={ { content: [''] } } {...props} />
		);
		(() => TestUtils.findRenderedDOMComponentWithClass(section, 'section--section-node-style')).should.not.throw();
	});
});
