import chai from 'chai';
import httpMocks from 'node-mocks-http';

import * as poller from '../../../server/libs/graphql-poller';
import sinon from 'sinon';
import frontPage from '../../../server/routes/front-page';


const expect = chai.expect;

describe('Front Page Controller', () => {

	let request;
	let response;
	let next;
	let flags = { };
	const createInstance = (params, flags) => {
		next = sinon.stub();
		request = httpMocks.createRequest(params);
		response = httpMocks.createResponse();
		response.cache = () => null;
		response.locals = { flags: flags || {} };
		return frontPage('uk')(request, response, next);
	};

	afterEach(() => {
		poller.getData.restore();

	});

	it('returns a successful response with all the data', () => {
		sinon.stub(poller, 'getData', () => ({
			top: { items: ['a', 'b'] },
			topStory: { items: ['a'] },
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
		}));
		createInstance(null, flags);

		expect(next.callCount).to.equal(0);
		expect(response.statusCode).to.equal(200);
		expect(createInstance).not.to.throw;

	});

	it('throws an error if the first top story is missing', () => {
		sinon.stub(poller, 'getData', () => ({
			top: { items: ['a', 'b'] },
			topStory: { items: [] },
			topStoriesList: { layoutHint: null, items: [] },
			fastFT: { items: ['a'] },
			opinion: { items: ['a'] },
			editorsPicks: { items: ['a'] },
			popularTopics: ['a'],
			popularArticles: ['a'],
			technology: { items: ['a'] },
			markets: { items: ['a'] },
			lifestyle: { items: ['a'] },
			videos: { items: ['a'] }
		}));

		expect(createInstance).to.throw(/Could not fetch content/);
	});

	it('throws an error if the other top stories is missing', () => {
		sinon.stub(poller, 'getData', () => ({
			top: { items: [] },
			topStory: { items: ['a'] },
			topStoriesList: { layoutHint: null, items: [] },
			fastFT: { items: ['a'] },
			opinion: { items: ['a'] },
			editorsPicks: { items: ['a'] },
			popularTopics: ['a'],
			popularArticles: ['a'],
			technology: { items: ['a'] },
			markets: { items: ['a'] },
			lifestyle: { items: ['a'] },
			videos: { items: ['a'] }
		}));

		expect(createInstance).to.throw(/Could not fetch content/);
	});

	it('throws an error if all top stories is missing', () => {
		sinon.stub(poller, 'getData', () => ({
			top: null,
			topStory: { },
			topStoriesList: { layoutHint: null, items: ['a'] },
			fastFT: { items: ['a'] },
			opinion: { items: ['a'] },
			editorsPicks: { items: ['a'] },
			popularTopics: ['a'],
			popularArticles: ['a'],
			technology: { items: ['a'] },
			markets: { items: ['a'] },
			lifestyle: { items: ['a'] },
			videos: { items: ['a'] }
		}));

		expect(createInstance).to.throw(/Could not fetch content/);
	});


	it('does not throw an error if most popular is missing', () => {
		sinon.stub(poller, 'getData', () => ({
			top: { items : ['a'] },
			topStory: { items : ['a'] },
			topStoriesList: { layoutHint: null, items: [] },
			fastFT: { items: ['a'] },
			opinion: { items: ['a'] },
			editorsPicks: { items: ['a'] },
			popularTopics: ['a'],
			popularArticles: [],
			technology: { items: ['a'] },
			markets: { items: ['a'] },
			lifestyle: { items: ['a'] },
			videos: { items: ['a'] }
		}));

		expect(createInstance).not.to.throw;
	});
});
