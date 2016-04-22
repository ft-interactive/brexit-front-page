import chai from 'chai';
chai.should();

import createImageSizes from '../../../shared/libs/create-image-sizes';

describe('Create Image Sizes', () => {

	it('should be full width image for top positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'top' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: '100vw - 40px',
			S: '100vw - 80px',
			XXL: '1390px'
		});
	});

	it('should be full width image for bottom positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'bottom' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: '100vw - 40px',
			S: '100vw - 80px',
			XXL: '1390px'
		});
	});

	it('should be 40% width image for left positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'left' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: '40vw - 16px',
			S: '40vw - 32px',
			XXL: '556px'
		});
	});

	it('should be 50% width image for left positioned images', () => {
		const colspan = { default: 12 };
		const position = { default: 'right' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: '50vw - 20px',
			S: '50vw - 40px',
			XXL: '695px'
		});
	});

	it('should handle different positions', () => {
		const colspan = { default: 12 };
		const position = { default: 'top', S: 'left', L: 'bottom', XXL: 'right' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: '100vw - 40px',
			S: '40vw - 32px',
			L: '100vw - 80px',
			XXL: '695px'
		});
	});

	it('should handle different colspan', () => {
		const colspan = { default: 12, S: 6, L: 8, XXL: 9 };
		const position = { default: 'top' };
		const imageSizes = createImageSizes(colspan, position);

		imageSizes.should.eql({
			default: '100vw - 40px',
			S: '50vw - 55px',
			M: '50vw - 57.5px',
			L: '66.667vw - 65px',
			XXL: '1033.75px'
		});
	});

});
