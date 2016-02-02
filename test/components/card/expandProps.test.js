import chai from 'chai';
const expect = chai.expect;

import expandProps from '../../../shared/libs/expandProps';

describe('Card props expansion rules', () => {
	const inProps = {
		cardIndex: 0,
		size: 'large',
		image: {default: true, S: true, M: false, L: true},
		related: {default: 1, S: 2, M: 3, L: 4},
		standFirst: {default: true, S: true, M: true, L: false},
		item: {relatedContent: ['a', 'b', 'c', 'd']}
	};

	describe('#expandProps', () => {

		it('Sets card size correctly with image unavailable', () => {

			expect(expandProps(inProps).size).to.eql('large-no-image');
		});

		it('Sets card size correctly with image available', () => {
			const props = Object.assign({}, inProps, {item: {primaryImage: true}});

			expect(expandProps(props).size).to.eql('large');
		});

		it('Sets card size for 2nd card correctly with image unavailable', () => {
			const props = Object.assign({}, inProps, {cardIndex: 1});

			expect(expandProps(props).size).to.eql('large-no-image');
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
