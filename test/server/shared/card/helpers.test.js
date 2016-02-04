import chai from 'chai';
const expect = chai.expect;

import Helpers from '../../../../shared/libs/helpers';

describe('Card helpers', () => {
	describe('#objMap', () => {
		it('Maps an object with a single key', () => {
			const result = Helpers.objMap({a: 3}, (it) => it + 1);

			expect(result).to.eql({a: 4});
		});

		it('Maps an object with a multiple keys', () => {
			const result = Helpers.objMap({a: 3, b: 2}, (it) => it + 1);

			expect(result).to.eql({a: 4, b: 3});
		});

		it('Maps provides the key to the callback', () => {
			const result = Helpers.objMap({a: 3, b: 2}, (it, key) => key);

			expect(result).to.eql({a: 'a', b: 'b'});
		});
	});

	describe('#responsiveClass', () => {
		it('turns a responsive value object to a prefixed class string', () => {
			const result = Helpers.responsiveClass('my-class', {default: 'a', S: 'b', L: 'c'});

			expect(result).to.eq('my-class--a my-class--S--b my-class--L--c');
		})

		it('ignores all keys apart from default and layout sizes', () => {
			const result = Helpers.responsiveClass('my-class', {default: 'a', S: 'b', blah: 'c'});

			expect(result).to.eq('my-class--a my-class--S--b');
		})

		it('handles false as a value', () => {
			const result = Helpers.responsiveClass('my-class', {default: 'a', S: true, L: false});

			expect(result).to.eq('my-class--a my-class--S--true my-class--L--false');
		})
	});

	describe('#responsiveValue', () => {
		it('turns a responsive value object to a string', () => {
			const result = Helpers.responsiveValue({default: 'a', S: 'b', L: 'c'});

			expect(result).to.eq('a S--b L--c');
		})

		it('ignores all keys apart from default and layout sizes', () => {
			const result = Helpers.responsiveValue({default: 'a', S: 'b', blah: 'c'});

			expect(result).to.eq('a S--b');
		})
	});
});
