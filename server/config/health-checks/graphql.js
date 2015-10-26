export default {
    name: 'GraphQL',
    description : 'Query GraphQL',
    checks : [
        {
            name: 'Top Stories UK',
            severity: 1,
            businessImpact: 'No top stories section displayed on front page',
            technicalSummary: 'Tries to query GraphQL for top stories',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUK',
            verifyKeys: ['top']
        },
        {
            name: 'Top Stories International',
            severity: 1,
            businessImpact: 'No top stories section displayed on international front page',
            technicalSummary: 'Tries to query GraphQL for top stories',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUS',
            verifyKeys: ['top']
        },
        {
            name: 'FastFT',
            severity: 2,
            businessImpact: 'No FastFT section displayed on front page',
            technicalSummary: 'Tries to query GraphQL for top stories',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'fastFT'
        },
        {
            name: `Editor\'s Picks`,
            severity: 2,
            businessImpact: `No 'Editor's Picks' section displayed on front page`,
            technicalSummary: `Tries to query GraphQL for editor's picks`,
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUK',
            verifyKeys: ['editorsPicks']
        }
    ]
}
