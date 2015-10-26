import chai from 'chai';
const expect = chai.expect;

import Engine from '../../../components/layout/engine';

describe('Layout engine', () => {
	describe('#maximumCards', () => {
		it('counts cards for a single layout', () => {
			const layout = {default: ['card', 'card', 'card']};

			expect(Engine.maximumCards(layout)).to.eq(3);
		});

		it('counts cards for multiple layouts', () => {
			const layout = {
				S: ['card', 'card', 'card', 'card', 'card'],
				M: ['card', 'card', 'card', 'card']
			};

			expect(Engine.maximumCards(layout)).to.eq(5);
		});
	});

	describe('#colspans', () => {
		it('sets defaults properly', () => {
			const layout = {
				default: [{}, {}, {}]
			};

			// second card should have a span of 12 in column 0
			expect(Engine.colspans(layout, 1)).to.eql({0: {default: 12}});
		});

		it('lays out one card in first column', () => {
			const layout = {
				S: [{column: 0, width: 5}]
			};
			const expectedSpan = {
				0: {default: 12, S: 5}
			};

			expect(Engine.colspans(layout, 0)).to.eql(expectedSpan);
		});

		it('lays out two cards in two columns', () => {
			const layout = {
				S: [{column: 0, width: 5}, {column: 1, width: 7}]
			};
			const expectedSpan = {
				1: {default: 12, S: 7}
			};

			expect(Engine.colspans(layout, 1)).to.eql(expectedSpan);
		});

		it('lays out a card in two columns of different width', () => {
			const layout = {
				S: [{column: 0, width: 6}, {column: 1, width: 6}],
				L: [{column: 0, width: 5}, {column: 1, width: 4}]
			};
			const expectedSpan = {
				1: {default: 12, S: 6, L: 4}
			};

			expect(Engine.colspans(layout, 1)).to.eql(expectedSpan);
		});

		it('lays out a cards in different columns in two layouts', () => {
			const layout = {
				S: [{column: 0, width: 6}, {column: 0, width: 6}],
				M: [{column: 0, width: 5}, {column: 1, width: 4}]
			};
			const expectedSpan = {
				0: {default: 12, S: 6, M: 'hide', S: 'hide'},
				1: {default: 'hide', M: 4, L: 4}
			};

			expect(Engine.colspans(layout, 1)).to.eql(expectedSpan);
		});

		it('lays out a card in different columns in three layouts', () => {
			const layout = {
				S: [{column: 0, width: 6}, {column: 0, width: 6}, {column: 0, width: 6}, {column: 1, width: 6}],
				M: [{column: 0, width: 7}, {column: 0, width: 7}, {column: 1, width: 5}, {column: 1, width: 5}],
				L: [{column: 0, width: 5}, {column: 1, width: 4}, {column: 2, width: 3}, {column: 2, width: 3}]
			};
			const expectedSpan = {
				0: {default: 12, S: 6, M: 'hide'},
				1: {default: 'hide', M: 5, L: 'hide'},
				2: {default: 'hide', L: 3}
			};

			expect(Engine.colspans(layout, 2)).to.eql(expectedSpan);
		});
	});

	describe('#cardProps', () => {
		it('sets defaults to the right value if none provided', () => {
			const layout = {
				default: [{}, {}, {}]
			};
			const expectedProps = {
				size: {default: 'medium'},
				standFirst: {default: false},
				image: {default: false},
				related: {default: 0}
			}

			expect(Engine.cardProps(layout, 1)).to.eql(expectedProps);
		});

		it('sets defaults to the default value', () => {
			const layout = {
				default: [
					{size: 'large', standFirst: true, image: true, related: 3},
				]
			};
			const expectedProps = {
				size: {default: 'large'},
				standFirst: {default: true},
				image: {default: true},
				related: {default: 3}
			}

			expect(Engine.cardProps(layout, 0)).to.eql(expectedProps);
		});

		it('sets overrides to the set value', () => {
			const layout = {
				default: [
					{size: 'large', standFirst: true, image: true, related: 3},
					{size: 'large', standFirst: true, image: false, related: 0}
				],
				L: [
					{size: 'large', standFirst: true, image: true, related: 3},
					{size: 'large', standFirst: true, image: true, related: 1},
				]
			};
			const expectedProps = {
				size: {default: 'large', L: 'large'},
				standFirst: {default: true, L: true},
				image: {default: false, L: true},
				related: {default: 0, L: 1}
			}

			expect(Engine.cardProps(layout, 1)).to.eql(expectedProps);
		});
	});

	describe('#buildColumns', () => {
		it('Builds a layout with a single card and defaults', () => {
			const articles = ['first'];
			const layout = {
				default: [{}]
			};
			const expected = [
				{
					colspan: {default: 12},
					cards: [
						{
							order: 0,
							show: {default: true},
							size: {default: 'medium'},
							standFirst: {default: false},
							image: {default: false},
							related: {default: 0},
							article: 'first'
						}
					]
				}
			];

			expect(Engine.buildColumns(layout, articles)).to.eql(expected);
		});

		it('Builds a layout with a single card and multiple breakpoints', () => {
			const articles = ['first'];
			const layout = {
				default: [{size: 'large', image: true, related: 3}],
				M: [{column: 0, width: 5, size: 'medium', related: 2}]
			};
			const expected = [
				{
					colspan: {default: 12, M: 5},
					cards: [
						{
							order: 0,
							show: {default: true, M: true},
							size: {default: 'large', M: 'medium'},
							standFirst: {default: false, M: false},
							image: {default: true, M: false},
							related: {default: 3, M: 2},
							article: 'first'
						}
					]
				}
			];

			expect(Engine.buildColumns(layout, articles)).to.eql(expected);
		});

		it('Builds a complex layout', () => {
			const articles = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
			const layout = {
				default: [
					{ size: 'large', standFirst: true, image: true, related: 3 },
					{ size: 'medium', standFirst: true },
					{ size: 'medium' },
					{ size: 'small' },
					{ size: 'tiny' },
					{ size: 'tiny' },
					{ size: 'tiny' }
				],
				S: [
					{ column: 0, width: 6, size: 'large', standFirst: true, image: true, related: 3 },
					{ column: 0, width: 6, size: 'large', standFirst: true },
					{ column: 1, width: 6, size: 'medium', image: true },
					{ column: 1, width: 6, size: 'medium', standFirst: true },
					{ column: 1, width: 6, size: 'small' },
					{ column: 1, width: 6, size: 'tiny' },
					{ column: 1, width: 6, size: 'tiny' }
				],
				M: [
					{ column: 0, width: 5, size: 'large', standFirst: true, image: true, related: 3 },
					{ column: 1, width: 4, size: 'medium', standFirst: true, image: true },
					{ column: 1, width: 4, size: 'medium' },
					{ column: 2, width: 3, size: 'small', image: true },
					{ column: 2, width: 3, size: 'tiny' },
					{ column: 2, width: 3, size: 'tiny' },
					{ column: 2, width: 3, size: 'tiny' }
				]
			};
			const expected = [
				{ // column 0
					colspan: { default: 12, S: 6, M: 5 },
					cards: [
						{
							order: 0,
							article: 'first',
							show: { default: true, S: true, M: true },
							size: { default: 'large', S: 'large', M: 'large' },
							standFirst: { default: true, S: true, M: true},
							image: { default: true, S: true, M: true },
							related: { default: 3, S: 3, M: 3 }
						},
						{
							order: 1,
							article: 'second',
							show: { default: true, S: true, M: false },
							size: { default: 'medium', S: 'large', M: 'medium' },
							standFirst: { default: true, S: true, M: true},
							image: { default: false, S: true, M: true },
							related: { default: 0, S: 0, M: 0 }
						}
					]
				},
				{
					colspan: { default: 12, S: 6, M: 4 },
					cards: [
						{
							order: 1,
							article: 'second',
							show: { default: false, S: false, M: true },
							size: { default: 'medium', S: 'large', M: 'medium'},
							standFirst: { default: true },
							image: { default: false, M: true },
							related: { default: 0 }
						},
						{
							order: 2,
							article: 'third',
							show: { default: true },
							size: { default: 'medium' },
							standFirst: { default: false },
							image: { default: false, S: true, M: false },
							related: { default: 0 }
						},
						{
							order: 3,
							article: 'fourth',
							show: { default: true, M: false},
							size: { default: 'small', S: 'medium', M: 'small' },
							standFirst: { default: false, S: true, M: false},
							image: { default: false, M: true },
							related: { default: 0 }
						},
						{
							order: 4,
							article: 'fifth',
							show: { default: true, M: false},
							size: { default: 'tiny', S: 'small', M: 'tiny' },
							standFirst: { default: false },
							image: { default: false },
							related: { default: 0 }
						},
						{
							order: 5,
							article: 'sixth',
							show: { default: true, M: false},
							size: { default: 'tiny' },
							standFirst: { default: false },
							image: { default: false },
							related: { default: 0 }
						},
						{
							order: 6,
							article: 'seventh',
							show: { default: true, M: false},
							size: { default: 'tiny' },
							standFirst: { default: false },
							image: { default: false },
							related: { default: 0 }
						}
					]
				},
				{
					colspan: { default: 'hide', M: 3 },
					cards: [
						{
							order: 3,
							article: 'fourth',
							show: { default: false, M: true },
							size: { default: 'small', S: 'medium', M: 'small' },
							standFirst: { default: false, S: true, M: false},
							image: { default: false, M: true },
							related: { default: 0 }
						},
						{
							order: 4,
							article: 'fifth',
							show: { default: false, M: true },
							size: { default: 'tiny', S: 'small', M: 'tiny' },
							standFirst: { default: false },
							image: { default: false },
							related: { default: 0 }
						},
						{
							order: 5,
							article: 'sixth',
							show: { default: false, M: true },
							size: { default: 'tiny' },
							standFirst: { default: false },
							image: { default: false },
							related: { default: 0 }
						},
						{
							order: 6,
							article: 'seventh',
							show: { default: false, M: true },
							size: { default: 'tiny' },
							standFirst: { default: false },
							image: { default: false },
							related: { default: 0 }
						}
					]
				}
			];

			expect(Engine.buildColumns(layout, articles)).to.eql(expected);
		});
	})
})
