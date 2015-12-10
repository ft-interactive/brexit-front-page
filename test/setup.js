import nock from 'nock';

// NOTE - need to mock requests before starting (requiring) app
nock('https://next-graphql-api.ft.com')
    .persist()
    .post('/')
    .query(true)
    .reply(200);
