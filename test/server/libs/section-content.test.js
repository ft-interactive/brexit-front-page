import chai from 'chai';
import sectionContent from '../../../server/libs/section-data';

chai.should();
const expect = chai.expect;

describe('Section Content', () => {

	const data = {
		top: { items: ['1-with-more-stuff', '2', '3'] },
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
		const results = sectionContent({ frontPage: data });

		expect(results['top-stories'].main.length).to.equal(3);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[2]).to.equal('3');

	});

	it('uses standard layout if frontPageMultipleLayouts flag is off', () => {
		data.topStoriesList = { items: [{ id: 'list-1' }], layoutHint: 'assassination' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: false });

		expect(results['top-stories'].layoutHint).to.equal('standard');
	});

	it('uses editorial layout if frontPageMultipleLayouts flag is on', () => {
		data.topStoriesList = { items: [{ id: 'list-1' }], layoutHint: 'assassination' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: true });

		expect(results['top-stories'].layoutHint).to.equal('assassination');
	});

	it('Does not include picture story from list if picture story layout chosen and flag is off', () => {
		data.topStoriesList = { items: [{ id: 'picture-story' }], layoutHint: 'standaloneimage' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: false});

		expect(results['top-stories'].layoutHint).to.equal('standard');

		expect(results['top-stories'].main.length).to.equal(3);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[1]).to.equal('2');
		expect(results['top-stories'].main[2]).to.equal('3');

	});

	it('Includes picture story from list if picture story layout chosen and flag is on', () => {
		data.topStoriesList = { items: [{ id: 'picture-story' }], layoutHint: 'standaloneimage' };
		const results = sectionContent( {frontPage: data }, { frontPageMultipleLayouts: true});

		expect(results['top-stories'].layoutHint).to.equal('standaloneimage');

		expect(results['top-stories'].main.length).to.equal(4);
		expect(results['top-stories'].main[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].main[1]).to.eql({ id: 'picture-story' });
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

	describe('Big Story', () => {

		it('should add the first story from top stories list to the top of the content', () => {
			const topStoriesList = {
				items: [
					{ id: 'big-story' }
				],
				layoutHint: 'bigstory'
			};
			const frontPage = Object.assign({}, data, { topStoriesList });
			const results = sectionContent({ frontPage }, { frontPageMultipleLayouts: true });
			const topStories = results['top-stories'].main;

			results['top-stories'].layoutHint.should.equal('bigstory');
			topStories.should.have.length(4);
			topStories[0].id.should.equal('big-story');
			topStories[1].should.equal('1-with-more-stuff');
			topStories[2].should.equal('2');
			topStories[3].should.equal('3');
		});

		it('should add the second to fourth story from top stories list as related items to the top story', () => {
			const topStoriesList = {
				items: [
					{ id: 'big-story' },
					{ id: 'related-1' },
					{ id: 'related-2' },
					{ id: 'related-3' },
					{ id: 'related-4' }
				],
				layoutHint: 'bigstory'
			};
			const frontPage = Object.assign({}, data, { topStoriesList });
			const results = sectionContent({ frontPage }, { frontPageMultipleLayouts: true });
			const topStoryRelatedContent = results['top-stories'].main[0].relatedContent;

			topStoryRelatedContent.should.have.length(3);
			topStoryRelatedContent[0].id.should.equal('related-1');
			topStoryRelatedContent[1].id.should.equal('related-2');
			topStoryRelatedContent[2].id.should.equal('related-3');
		});

		it('should dedupe stories', () => {
			const top = {
				items: [
					{ id: 'top-story-1' },
					{ id: 'top-story-2' }
				]
			};
			const topStory = {
				items: [
					{ id: 'top-story-1' }
				]
			};
			const topStoriesList = {
				items: [
					{ id: 'top-story-1' }
				],
				layoutHint: 'bigstory'
			};
			const frontPage = Object.assign({}, data, { top, topStory, topStoriesList });
			const results = sectionContent({ frontPage }, { frontPageMultipleLayouts: true });
			const topStories = results['top-stories'].main;

			topStories.should.have.length(2);
			topStories[0].id.should.have.equal('top-story-1');
			topStories[1].id.should.have.equal('top-story-2');
		});

		it('should dedupe related stories from main top stories list', () => {
			const top = {
				items: [
					{ id: 'top-story-1' },
					{ id: 'related-1' },
					{ id: 'top-story-2' },
					{ id: 'related-2' },
					{ id: 'top-story-3' },
					{ id: 'related-3' }
				]
			};
			const topStory = {
				items: [
					{ id: 'top-story-1' }
				]
			};
			const topStoriesList = {
				items: [
					{ id: 'big-story' },
					{ id: 'related-1' },
					{ id: 'related-2' },
					{ id: 'related-3' }
				],
				layoutHint: 'bigstory'
			};
			const frontPage = Object.assign({}, data, { top, topStory, topStoriesList });
			const results = sectionContent({ frontPage }, { frontPageMultipleLayouts: true });
			const topStories = results['top-stories'].main;

			topStories.should.have.length(4);
			topStories[0].id.should.equal('big-story');
			topStories[1].id.should.equal('top-story-1');
			topStories[2].id.should.equal('top-story-2');
			topStories[3].id.should.equal('top-story-3');
		});

	});

});
