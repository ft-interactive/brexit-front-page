const graphqQlHealthCheck = {
	name: 'GraphQL',
	description : 'Query GraphQL',
	checks : [
		{
			name: 'Top Stories UK',
			severity: 1,
			businessImpact: 'No top stories section displayed on the front page',
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
			businessImpact: 'Top Stories on the International homepage hasn\'t updated in the last 30 minutes',
			technicalSummary: 'Checks the last time that poller successfully fetches frontPageUS',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUS',
			freshnessThreshold: 1800000
		},
		{
			name: 'Top Stories International Freshness (10 minutes)',
			severity: 2,
			businessImpact: 'Top Stories on the International homepage hasn\'t updated in the last 10 minutes',
			technicalSummary: 'Checks the last time that poller successfully fetches frontPageUS',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUS',
			freshnessThreshold: 600000
		},
		{
			name: 'FastFT',
			severity: 2,
			businessImpact: 'No FastFT section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for fastFT',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			freshnessThreshold: 1800000,
			query: 'frontPageUK',
			verifyKeys: ['fastFTNew']
		},
		{
			name: 'Opinion',
			severity: 2,
			businessImpact: 'No Opinion section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for opinion',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUK',
			verifyKeys: ['opinion']
		},
		{
			name: 'Editor\'s Picks',
			severity: 2,
			businessImpact: 'No Editor\'s Picks section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for editorsPicks',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUK',
			verifyKeys: ['editorsPicks']
		},
		{
			name: 'Most Read',
			severity: 2,
			businessImpact: 'No Most Read section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for popularArticles',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUK',
			verifyKeys: ['popularArticles']
		},
		{
			name: 'Technology',
			severity: 2,
			businessImpact: 'No Technology section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for technology',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUK',
			verifyKeys: ['technology']
		},
		{
			name: 'Markets',
			severity: 2,
			businessImpact: 'No Markets section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for markets',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUK',
			verifyKeys: ['markets']
		},
		{
			name: 'Life & Arts',
			severity: 2,
			businessImpact: 'No Life & Arts section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for lifestyle',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUK',
			verifyKeys: ['lifestyle']
		},
		{
			name: 'Video',
			severity: 2,
			businessImpact: 'No Video section displayed on the front page',
			technicalSummary: 'Tries to query GraphQL for videos',
			panicGuide: 'Check the GraphQL service health checks (http://next-graphql-api.ft.com/__health)',
			type: 'graphQl',
			interval: '60s',
			query: 'frontPageUK',
			verifyKeys: ['videos']
		}
	]
};

export default graphqQlHealthCheck
