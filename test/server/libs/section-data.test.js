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

		expect(results['top-stories'].content.length).to.equal(3);
		expect(results['top-stories'].content[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].content[2]).to.equal('3');

	});

	it('uses editorial layout', () => {
		data.topStoriesList = { items: [{ id: 'list-1' }], layoutHint: 'assassination' };
		const results = sectionContent( {frontPage: data });

		expect(results['top-stories'].layoutHint).to.equal('assassination');
	});

	it('Includes picture story from list if picture story layout chosen', () => {
		data.topStoriesList = { items: [{ id: 'picture-story' }], layoutHint: 'standaloneimage' };
		const results = sectionContent( {frontPage: data });

		expect(results['top-stories'].layoutHint).to.equal('standaloneimage');

		expect(results['top-stories'].content.length).to.equal(4);
		expect(results['top-stories'].content[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].content[1]).to.eql({ id: 'picture-story' });
		expect(results['top-stories'].content[3]).to.equal('3');

	});

	it('Defaults to standard layout if no picture story provided in list', () => {
		data.topStoriesList = { items: [], layoutHint: 'standaloneimage' };
		const results = sectionContent( {frontPage: data });

		expect(results['top-stories'].layoutHint).to.equal('standard');

		expect(results['top-stories'].content.length).to.equal(3);
		expect(results['top-stories'].content[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].content[1]).to.equal('2');
		expect(results['top-stories'].content[2]).to.equal('3');
	});

	it('Defaults to standard layout if top stories list has no data', () => {
		data.topStoriesList = { items: null, layoutHint: null };
		const results = sectionContent( {frontPage: data });

		expect(results['top-stories'].layoutHint).to.equal('standard');

		expect(results['top-stories'].content.length).to.equal(3);
		expect(results['top-stories'].content[0]).to.equal('1-with-more-stuff');
		expect(results['top-stories'].content[1]).to.equal('2');
		expect(results['top-stories'].content[2]).to.equal('3');
	});

	describe('Big Story', () => {

		it('should add the stories from top stories list to the top of the content', () => {
			const topStoriesList = {
				items: [
					{ id: 'big-story' },
					{ id: 'other-big-story' }
				],
				layoutHint: 'bigstory'
			};
			const frontPage = Object.assign({}, data, { topStoriesList });
			const results = sectionContent({ frontPage });
			const topStories = results['top-stories'].content;

			results['top-stories'].layoutHint.should.equal('bigstory');
			topStories.should.have.length(5);
			topStories[0].id.should.equal('big-story');
			topStories[1].id.should.equal('other-big-story');
			topStories[2].should.equal('1-with-more-stuff');
			topStories[3].should.equal('2');
			topStories[4].should.equal('3');
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
			const results = sectionContent({ frontPage });
			const topStories = results['top-stories'].content;

			topStories.should.have.length(2);
			topStories[0].id.should.have.equal('top-story-1');
			topStories[1].id.should.have.equal('top-story-2');
		});

	});

});
