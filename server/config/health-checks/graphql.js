export default {
    name: 'GraphQL',
    description : 'Query GraphQL',
    checks : [
        {
            name: 'Top Stories UK',
            severity: 1,
            businessImpact: 'No top stories section displayed on front page',
            technicalSummary: 'Checks that the polled graphQL query for frontPageUK has top stories',
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
            technicalSummary: 'Checks that the polled graphQL query for frontPageUS has top stories',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUS',
            verifyKeys: ['top']
        },
        {
            name: 'Top Stories UK Freshness (30 minutes)',
            severity: 1,
            businessImpact: 'Top Stories on homepage hasn\'t updated in the last 30 minutes',
            technicalSummary: 'Checks the last time that poller succesfully fetches frontPageUK',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUK',
            freshnessThreshold: 1800000
        },
        {
            name: 'Top Stories UK Freshness (10 minutes)',
            severity: 2,
            businessImpact: 'Top Stories on UK homepage hasn\'t updated in the last 10 minutes',
            technicalSummary: 'Checks the last time that poller succesfully fetches frontPageUK',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUK',
            freshnessThreshold: 600000
        },
        {
            name: 'Top Stories International Freshness (30 minutes)',
            severity: 1,
            businessImpact: 'Top Stories on International homepage hasn\'t updated in the last 30 minutes',
            technicalSummary: 'Checks the last time that poller succesfully fetches frontPageUS',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUS',
            freshnessThreshold: 1800000
        },
        {
            name: 'Top Stories International Freshness (10 minutes)',
            severity: 2,
            businessImpact: 'Top Stories on International homepage hasn\'t updated in the last 10 minutes',
            technicalSummary: 'Checks the last time that poller succesfully fetches frontPageUS',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: 'frontPageUS',
            freshnessThreshold: 600000
        },
        {
            name: 'FastFT',
            severity: 2,
            businessImpact: 'No FastFT section displayed on front page',
            technicalSummary: 'Tries to query GraphQL for top stories',
            panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            freshnessThreshold: 1800000,
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
