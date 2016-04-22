import chai from 'chai';
const expect = chai.expect;

import { responsiveClass, responsiveValue } from '../../../shared/libs/helpers';

describe('Card helpers', () => {
	describe('#responsiveClass', () => {
		it('turns a responsive value object to a prefixed class string', () => {
			const result = responsiveClass('my-class', {default: 'a', S: 'b', L: 'c'});

			expect(result).to.eq('my-class--a my-class--S--b my-class--L--c');
		});

		it('ignores all keys apart from default and layout sizes', () => {
			const result = responsiveClass('my-class', {default: 'a', S: 'b', blah: 'c'});

			expect(result).to.eq('my-class--a my-class--S--b');
		});

		it('handles false as a value', () => {
			const result = responsiveClass('my-class', {default: 'a', S: true, L: false});

			expect(result).to.eq('my-class--a my-class--S--true my-class--L--false');
		});
	});

	describe('#responsiveValue', () => {
		it('turns a responsive value object to a string', () => {
			const result = responsiveValue({default: 'a', S: 'b', L: 'c'});

			expect(result).to.eq('a S--b L--c');
		});

		it('ignores all keys apart from default and layout sizes', () => {
			const result = responsiveValue({default: 'a', S: 'b', blah: 'c'});

			expect(result).to.eq('a S--b');
		});
	});
});
