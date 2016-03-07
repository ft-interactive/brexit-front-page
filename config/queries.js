const fragments = {
	basic: `
		fragment Basic on Content {
			type: __typename
			id
			title
			lastPublished
		}
	`,
	extended: `
		fragment Extended on Content {
			summary
			primaryTag {
				id
				url
				name
				taxonomy
			}
			branding {
				id
				url
				name
				taxonomy
			}
			primaryImage {
				rawSrc
			}
		}
	`,
	related: `
		fragment Related on Content {
			relatedContent(limit: 3) {
				id
				title
			}
		}
	`,
	liveBlog: `
		fragment LiveBlogInfo on LiveBlog {
			status
			updates(limit: 1) {
				date
				text
			}
		}
	`
};

// Produces a front page query for a given region
const frontPage = (region) => (`
	${fragments.basic}
	${fragments.extended}
	${fragments.related}
	${fragments.liveBlog}

	query FrontPage {
		topStory: top(region: ${region}){
			items(limit: 1) {
				... Basic
				... Related
				... LiveBlogInfo
				summary
				primaryTag {
					id
					url
					taxonomy
					name
					items(limit: 4) {
						id
						title
					}
				}
				primaryImage {
					rawSrc
				}
			}
		}
		top(region: ${region}) {
			items {
				... Basic
				... Extended
				... Related
				... LiveBlogInfo
			}
		}
		topStoriesList(region: ${region}) {
			layoutHint
			items {
				... Basic
				... Extended
				... Related
				... LiveBlogInfo
			}
		}

		fastFTNew(limit: 7) {
			... Basic
		}
		editorsPicks {
			title
			items(limit: 6) {
				... Basic
				... Extended
				... Related
			}
		}
		opinion {
			items {
				... Basic
				... Extended
				... Related
				authors {
					name
					id
					headshot
					isBrand
				}
				tags(only: ["genre", "brand"]) {
					name
					taxonomy
					url
				}
			}
		}
		videos(limit: 6) {
			type: __typename
			id
			title
			image {
				rawSrc
			}
		}
		technology {
			items(limit: 2, genres: ["analysis", "comment"]) {
				... Basic
				... Extended
			}
		}
		markets {
			items(limit: 2, genres: ["analysis", "comment"]) {
				... Basic
				... Extended
			}
		}
		lifestyle {
			items(limit: 2) {
				... Basic
				... Extended
			}
		}
		popularArticles(limit: 9) {
			... Basic
			... Extended
		}
	}
`);


const mostPopular = (facet, uuid) => (`
	${fragments.basic}
	${fragments.extended}

	query mostPopular {
		popularFromHui(${facet}: "${uuid}") {
			... Basic
			... Extended
		}
	}
`);

const popularTopics = `
	query PopularTopics {
		popularTopics(limit: 3) {
			id
			name
			url
			taxonomy
			items(limit: 2) {
				id
				title
				... on Article {
					isPodcast
				}
				primaryImage {
					rawSrc
				}
			}
		}
	}
`;

const popularArticles = `
	${fragments.basic}
	${fragments.extended}

	query PopularArticles {
		popularArticles(limit: 9) {
			... Basic
			... Extended
		}
	}
`;

const user = `
	fragment Basic on Concept {
		type: __typename
		id
		name
		url
		taxonomy
		items(limit: 6) {
			id
			title
			... on Article {
				isPodcast
			}
			primaryImage {
				rawSrc
			}
		}
	}

	query MyFT {
		popularTopics(limit: 3) {
			... Basic
		}
		user {
			viewed(limit: 3) {
				... Basic
			}
			followed(limit: 3) {
				... Basic
			}
		}
	}
`;

export default { frontPage, mostPopular, popularTopics, popularArticles, user };
