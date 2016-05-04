import chai from 'chai';
chai.should();

import createImageSizes from '../../../shared/libs/create-image-sizes';

describe('Create Image Sizes', () => {

	it('should be full width image for top positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'top' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: 'calc(100vw - 40px)',
			S: 'calc(100vw - 80px)',
			XL: '1170px'
		});
	});

	it('should be full width image for bottom positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'bottom' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: 'calc(100vw - 40px)',
			S: 'calc(100vw - 80px)',
			XL: '1170px'
		});
	});

	it('should be 40% width image for left positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'left' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: 'calc(40vw - 16px)',
			S: 'calc(40vw - 32px)',
			XL: '468px'
		});
	});

	it('should be 50% width image for left positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'right' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: 'calc(50vw - 20px)',
			S: 'calc(50vw - 40px)',
			XL: '585px'
		});
	});

	it('should handle different positions', () => {
		const colspan = { default: 12 };
		const position = { default: 'top', S: 'left', L: 'bottom', XL: 'right' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: 'calc(100vw - 40px)',
			S: 'calc(40vw - 32px)',
			L: 'calc(100vw - 80px)',
			XL: '585px'
		});
	});

	it('should handle different colspan', () => {
		const colspan = { default: 12, S: 6, L: 8, XL: 9 };
		const position = { default: 'top' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: 'calc(100vw - 40px)',
			S: 'calc(50vw - 55px)',
			M: 'calc(50vw - 57.5px)',
			L: 'calc(66.667vw - 65px)',
			XL: '868.75px'
		});
	});

});
