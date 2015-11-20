import chai from 'chai';
const expect = chai.expect;

import expandProps from '../../../components/card/expandProps';

describe('Card props expansion rules', () => {
	const inProps = {
		order: 0,
		size: {default: 'tiny', S: 'small', M: 'medium', L: 'large'},
		image: {default: true, S: true, M: false, L: true},
		standFirst: {default: true, S: true, M: true, L: false},
		related: {default: 1, S: 2, M: 3, L: 4},
		item: {relatedContent: ['a', 'b', 'c', 'd']}
	};

	describe('#expandProps', () => {
		it('Sets tag size correctly', () => {
			const tagSize = {default: 'small', S: 'medium', M: 'large', L: 'large'};

			expect(expandProps(inProps).tagSize).to.eql(tagSize);
		});

		it('Sets title size correctly with image unavailable', () => {
			const titleSize = {default: 'tiny', S: 'small', M: 'medium', L: 'huge'};

			expect(expandProps(inProps).titleSize).to.eql(titleSize);
		});

		it('Sets title size correctly with image available', () => {
			const titleSize = {default: 'tiny', S: 'small', M: 'medium', L: 'large'};
			const props = Object.assign({}, inProps, {item: {primaryImage: true}});

			expect(expandProps(props).titleSize).to.eql(titleSize);
		});

		it('Sets title size for 2nd card correctly with image unavailable', () => {
			const titleSize = {default: 'tiny', S: 'small', M: 'medium', L: 'large'};
			const props = Object.assign({}, inProps, {order: 1});

			expect(expandProps(props).titleSize).to.eql(titleSize);
		});


		it('Sets standFirst visibility correctly', () => {
			const showStandFirst = {default: false, S: false, M: true, L: true};

			expect(expandProps(inProps).showStandFirst).to.eql(showStandFirst);
		});

		it('Sets standFirst size correctly', () => {
			const standFirstSize = {default: 'medium', S: 'medium', M: 'medium', L: 'large'};

			expect(expandProps(inProps).standFirstSize).to.eql(standFirstSize);
		});

		it('Sets showRelatedContent correctly', () => {
			const showRelated = [
				{default: true, S: true, M: true, L: true},
				{default: false, S: true, M: true, L: true},
				{default: false, S: false, M: true, L: true},
				{default: false, S: false, M: false, L: true}
			];

			expect(expandProps(inProps).showRelated).to.eql(showRelated);
		});

		it('Limits showRelatedContent to available related articles', () => {
			const props = Object.assign({}, inProps, {item: {relatedContent: []}});
			const showRelated = [];

			expect(expandProps(props).showRelated).to.eql(showRelated);
		});

	})
});
