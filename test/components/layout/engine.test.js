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
		it('sets defaults', () => {
			const layout = {
				default: [{}, {}, {}]
			};
			const expectedSpan = {
				0: {default: 12}
			};

			expect(Engine.colspans(layout, 1)).to.eql(expectedSpan);
		});

		it('sets default to hide on a card visible only on larger layout', () => {
			const layout = {
				default: [{}, {}, {}],
				S: [{}, {}, {}, {}]
			};
			const expectedSpan = {
				0: {default: 'hide', S: 12}
			};

			expect(Engine.colspans(layout, 3)).to.eql(expectedSpan);
		});

		it('sets default to 12 on a card that stays in one column', () => {
			const layout = {
				S: [{column: 0, width: 5}]
			};
			const expectedSpan = {
				0: {default: 12, S: 5}
			};

			expect(Engine.colspans(layout, 0)).to.eql(expectedSpan);
		});

		it('sets default to 12 in the first column card appears in', () => {
			const layout = {
				S: [{column: 0, width: 5}, {column: 1, width: 7}]
			};
			const expectedSpan = {
				1: {default: 12, S: 7}
			};

			expect(Engine.colspans(layout, 1)).to.eql(expectedSpan);
		});

		it('sets widths for a card that stays in one column', () => {
			const layout = {
				S: [{column: 0, width: 6}, {column: 1, width: 6}],
				L: [{column: 0, width: 5}, {column: 1, width: 4}]
			};
			const expectedSpan = {
				1: {default: 12, S: 6, L: 4}
			};

			expect(Engine.colspans(layout, 1)).to.eql(expectedSpan);
		});

		it('hides and shows card properly when it moves between columns', () => {
			const layout = {
				S: [{column: 0, width: 6}, {column: 0, width: 6}],
				M: [{column: 0, width: 5}, {column: 1, width: 4}]
			};
			const expectedSpan = {
				0: {default: 12, S: 6, M: 'hide' },
				1: {default: 'hide', S: 'hide', M: 4}
			};

			expect(Engine.colspans(layout, 1)).to.eql(expectedSpan);
		});

		it('hides and shows card even when it moves between multiple columns', () => {
			const layout = {
				S: [{column: 0, width: 6}, {column: 0, width: 6}, {column: 0, width: 6}, {column: 1, width: 6}],
				M: [{column: 0, width: 7}, {column: 0, width: 7}, {column: 1, width: 5}, {column: 1, width: 5}],
				L: [{column: 0, width: 5}, {column: 1, width: 4}, {column: 2, width: 3}, {column: 2, width: 3}]
			};
			const expectedSpan = {
				0: {default: 12, S: 6, M: 'hide', L: 'hide'},
				1: {default: 'hide', S: 'hide', M: 5, L: 'hide'},
				2: {default: 'hide', S: 'hide', M: 'hide', L: 3}
			};

			expect(Engine.colspans(layout, 2)).to.eql(expectedSpan);
		});

		it('Only renders cards that are necessary and always defaults to 12', () => {
			const layout = {
				default: [{column: 0, width: 6}, {column: 0, width: 6}, {column: 0, width: 6}, {column: 0, width: 6}],
				S: [{column: 0, width: 7}, {column: 0, width: 7}, {column: 1, width: 5}, {column: 1, width: 5}],
				M: [{column: 0, width: 5}, {column: 1, width: 4}, {column: 2, width: 3}, {column: 2, width: 3}]
			};
			const expectedSpan = {
				// no 0
				1: {default: 12, S: 5, M: 'hide'},
				2: {default: 'hide', S: 'hide', M: 3}
			};

			expect(Engine.colspans(layout, 3)).to.eql(expectedSpan);
		});

		if('Renders the default cards in their lowest columns, not the first one', () => {
			const layout = {
				default: [{column: 0, width: 6}, {column: 0, width: 6}, {column: 0, width: 6}, {column: 1, width: 6}],
				S: [{column: 0, width: 7}, {column: 0, width: 7}, {column: 1, width: 5}, {column: 1, width: 5}],
				M: [{column: 0, width: 5}, {column: 1, width: 4}, {column: 2, width: 3}, {column: 2, width: 3}]
			};
			const expectedSpan = {
				// no 0
				1: {default: 12, S: 5, M: 'hide'},
				2: {default: 'hide', S: 'hide', M: 3}
			};

			expect(Engine.colspans(layout, 2)).to.eql(expectedSpan);
		});

		it('handles cards only appearing in one specific layout', () => {
			const layout = {
				S: [{column: 0, width: 6}, {column: 0, width: 6}, {column: 0, width: 6}, {column: 1, width: 6}],
				M: [{column: 0, width: 7}, {column: 0, width: 7}, {column: 1, width: 5}, {column: 1, width: 5}, {column: 1, width: 5}, {column: 1, width: 5}],
				L: [{column: 0, width: 5}, {column: 1, width: 4}, {column: 2, width: 3}, {column: 2, width: 3}]
			};

			const expectedSpan = {
				1: {default: 12, S: 'hide', M: 5, L: 'hide'},
			}

			expect(Engine.colspans(layout, 4)).to.eql(expectedSpan);
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
							last: {default: true},
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
							last: {default: true, M: true},
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
							last: { default: false, S: false, M: true},
							size: { default: 'large', S: 'large', M: 'large' },
							standFirst: { default: true, S: true, M: true},
							image: { default: true, S: true, M: true },
							related: { default: 3, S: 3, M: 3 }
						},
						{
							order: 1,
							article: 'second',
							show: { default: true, S: true, M: false },
							last: { default: true, S: true, M: false},
							size: { default: 'medium', S: 'large', M: 'medium' },
							standFirst: { default: true, S: true, M: true},
							image: { default: false, S: false, M: true },
							related: { default: 0, S: 0, M: 0 }
						}
					]
				},
				{ // column 1
					colspan: { default: 12, S: 6, M: 4 },
					cards: [
						{
							order: 1,
							article: 'second',
							show: { default: false, S: false, M: true },
							size: { default: 'medium', S: 'large', M: 'medium'},
							standFirst: { default: true, S: true, M: true },
							image: { default: false, S: false, M: true },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 2,
							article: 'third',
							show: { default: true, S: true, M: true },
							last: { default: false, S: false, M: true},
							size: { default: 'medium', S: 'medium', M: 'medium' },
							standFirst: { default: false, S: false, M: false },
							image: { default: false, S: true, M: false },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 3,
							article: 'fourth',
							show: { default: true, S: true, M: false},
							size: { default: 'small', S: 'medium', M: 'small' },
							standFirst: { default: false, S: true, M: false},
							image: { default: false, S: false, M: true },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 4,
							article: 'fifth',
							show: { default: true, S: true, M: false},
							size: { default: 'tiny', S: 'small', M: 'tiny' },
							standFirst: { default: false, S: false, M: false },
							image: { default: false, S: false, M: false },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 5,
							article: 'sixth',
							show: { default: true, S: true, M: false},
							size: { default: 'tiny', S: 'tiny', M: 'tiny' },
							standFirst: { default: false, S: false, M: false },
							image: { default: false, S: false, M: false },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 6,
							article: 'seventh',
							show: { default: true, S: true, M: false},
							last: { default: true, S: true, M: false},
							size: { default: 'tiny', S: 'tiny', M: 'tiny' },
							standFirst: { default: false, S: false, M: false },
							image: { default: false, S: false, M: false },
							related: { default: 0, S: 0, M: 0 }
						}
					]
				},
				{ // column 2
					colspan: { default: 'hide', S: 'hide', M: 3 },
					cards: [
						{
							order: 3,
							article: 'fourth',
							show: { default: false, S: false, M: true },
							size: { default: 'small', S: 'medium', M: 'small' },
							standFirst: { default: false, S: true, M: false},
							image: { default: false, S: false, M: true },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 4,
							article: 'fifth',
							show: { default: false, S: false, M: true },
							size: { default: 'tiny', S: 'small', M: 'tiny' },
							standFirst: { default: false, S: false, M: false },
							image: { default: false, S: false, M: false },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 5,
							article: 'sixth',
							show: { default: false, S: false, M: true },
							size: { default: 'tiny', S: 'tiny', M: 'tiny' },
							standFirst: { default: false, S: false, M: false },
							image: { default: false, S: false, M: false },
							related: { default: 0, S: 0, M: 0 }
						},
						{
							order: 6,
							article: 'seventh',
							show: { default: false, S: false, M: true },
							last: { default: false, S: false, M: true},
							size: { default: 'tiny', S: 'tiny', M: 'tiny' },
							standFirst: { default: false, S: false, M: false },
							image: { default: false, S: false, M: false },
							related: { default: 0, S: 0, M: 0 }
						}
					]
				}
			];

			expect(Engine.buildColumns(layout, articles)[0]).to.eql(expected[0]);
			expect(Engine.buildColumns(layout, articles)[1]).to.eql(expected[1]);
			expect(Engine.buildColumns(layout, articles)[2]).to.eql(expected[2]);
		});
	})
})
