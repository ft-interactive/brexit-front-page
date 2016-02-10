import chai from 'chai';
import sectionContent from '../../../server/libs/section-content';

const expect = chai.expect;

describe ('Top stories data', () => {

	const data = {
		top: { items: ['1', '2', '3'] },
		topStory: { items: ['1-with-more-stuff'] },
		topStoriesList: { layoutHint: 'standard', items: [] },
		fastFT: { items: ['a'] },
		opinion: { items: ['a'] },
		editorsPicks: { items: ['a'] },
		popularTopics: ['a'],
		popularArticles: ['a'],
		technology: { items: ['a'] },
		markets: { items: ['a'] },
		lifestyle: { items: ['a'] },
		videos: { items: ['a'] }
	};

	it('Takes top story and combines it with the other top stories', () => {
		const results = sectionContent( {frontPage: data });

		expect(results['top-stories'].main.length).to.equal(3);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[2]).to.equal('3');

	});

	it('uses standard layout if frontPageMultipleLayouts flag is off', () => {
		data.topStoriesList = { items: ['list-1'], layoutHint: 'assassination' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: false });

		expect(results['top-stories'].layoutHint).to.equal('standard');
	});

	it('uses editorial layout if frontPageMultipleLayouts flag is on', () => {
		data.topStoriesList = { items: ['list-1'], layoutHint: 'assassination' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: true });

		expect(results['top-stories'].layoutHint).to.equal('assassination');
	});

	it('Does not include picture story from list if picture story layout chosen and flag is off', () => {
		data.topStoriesList = { items: ['picture-story'], layoutHint: 'standaloneimage' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: false});

		expect(results['top-stories'].layoutHint).to.equal('standard');

		expect(results['top-stories'].main.length).to.equal(3);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[1]).to.equal('2');
		expect(results['top-stories'].main[2]).to.equal('3');

	});

	it('Includes picture story from list if picture story layout chosen and flag is on', () => {
		data.topStoriesList = { items: ['picture-story'], layoutHint: 'standaloneimage' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: true});

		expect(results['top-stories'].layoutHint).to.equal('standaloneimage');

		expect(results['top-stories'].main.length).to.equal(4);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[1]).to.equal('picture-story');
		expect(results['top-stories'].main[3]).to.equal('3');

	});

	it('Defaults to standard layout if no picture story provided in list', () => {
		data.topStoriesList = { items: [], layoutHint: 'standaloneimage' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: true});

		expect(results['top-stories'].layoutHint).to.equal('standard');

		expect(results['top-stories'].main.length).to.equal(3);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[1]).to.equal('2');
		expect(results['top-stories'].main[2]).to.equal('3');
	});

	it('Defaults to standard layout if top stories list has no data', () => {
		data.topStoriesList = { items: null, layoutHint: null };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: true});

		expect(results['top-stories'].layoutHint).to.equal('standard');

		expect(results['top-stories'].main.length).to.equal(3);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[1]).to.equal('2');
		expect(results['top-stories'].main[2]).to.equal('3');
	});

});
