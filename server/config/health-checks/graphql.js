export default {
    name: 'GraphQL',
    description : 'Query GraphQL',
    checks : [
        {
            name: 'Top Stories',
            severity: 1,
            businessImpact: 'No top stories section displayed on front page',
            technicalSummary: 'Tries to query GraphQL for top stories',
            panicGuide: 'Check the GrpahQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: `
                fragment Basic on Content {
                    type: __typename
                    contentType
                    id
                    title
                    lastPublished
                }

                fragment Extended on Content {
                    genre
                    summary
                    primaryTag {
                        id
                        url
                        taxonomy
                        name
                    }
                    primaryImage {
                        src(width: 710)
                        alt
                    }
                }

                fragment Related on Content {
                    relatedContent(limit: 3) {
                        id
                        title
                        genre
                        primaryTag {
                            id
                            url
                            taxonomy
                            name
                        }
                    }
                }

                query TopStoriesTest {
                    popularTopics {
                        name
                        url
                    }
                    top(region: UK) {
                        leads: items(limit: 1, type: Article) {
                            ... Basic
                            ... Extended
                            ... Related
                        }
                        liveBlogs: items(type: LiveBlog) {
                            ... Basic
                            ... Extended
                            ... on LiveBlog {
                                status
                                updates(limit: 1) {
                                    date
                                    text
                                }
                            }
                        }
                        items(from: 1, type: Article) {
                            ... Basic
                            ... Extended
                        }
                    }
                }
		    `
        },
        {
            name: 'FastFT',
            severity: 1,
            businessImpact: 'No FastFT section displayed on front page',
            technicalSummary: 'Tries to query GraphQL for top stories',
            panicGuide: 'Check the GrpahQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: `
                fragment Basic on Content {
                    type: __typename
                    contentType
                    id
                    title
                    lastPublished
                }

                query FastFtTest {
                    fastFT {
                        items(limit: 5) {
                            ...Basic
                        }
                    }
                }
		    `
        },
        {
            name: `Editor\'s Picks`,
            severity: 1,
            businessImpact: `No 'Editor's Picks' section displayed on front page`,
            technicalSummary: `Tries to query GraphQL for editor's picks`,
            panicGuide: 'Check the GrpahQL service health checks (http://next-graphql-api.ft.com/__health)',
            type: 'graphQl',
            interval: '60s',
            query: `
                fragment Basic on Content {
                    type: __typename
                    contentType
                    id
                    title
                    lastPublished
                }

                fragment ExtendedSmallImage on Content {
                    genre
                    summary
                    primaryTag {
                        id
                        url
                        taxonomy
                        name
                    }
                    primaryImage {
                        src(width: 320)
                        alt
                    }
                }

                query EditorsPicksTest {
                    editorsPicks {
                        title
                        items(limit: 6) {
                            ... Basic
				            ... ExtendedSmallImage
                        }
                    }
                }
		    `
        }
    ]
}
