const basicFragments = `
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
			src(width: 400)
			rawSrc
		}
	}
`;

const fragments = `

	${basicFragments}

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
			src(width: 250)
			rawSrc
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
`;

// Produces a front page query for a given region
const frontPage = (region) => (`
	${fragments}

	query FrontPage {
		top(region: ${region}) {
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
		fastFT {
			items(limit: 5) {
				... Basic
			}
		}
		editorsPicks {
			title
			items(limit: 6) {
				... Basic
				... ExtendedSmallImage
			}
		}
		opinion {
			url
			items {
				... Basic
				... Extended
			}
		}
		lifestyle {
			url
			items(limit: 2) {
				... Basic
				... Extended
			}
		}
		markets {
			url
			items(limit: 2, genres: ["analysis", "comment"]) {
				... Basic
				... Extended
			}
		}
		technology {
			url
			items(limit: 2, genres: ["analysis", "comment"]) {
				... Basic
				... Extended
			}
		}
		popularArticles(limit: 10) {
			... Basic
			... Extended
		}
		videos(limit: 5) {
			id
			title
			image {
				rawSrc
			}
			renditions {
				url
				frameWidth
				videoCodec
			}
		}
	}
`);

const newFrontPage = (region) => (`
	${fragments}

	query FrontPage {
		top(region: ${region}) {
			items {
				... Basic
				... Extended
				... Related
				... on LiveBlog {
					status
					updates(limit: 1) {
						date
						text
					}
				}
			}
		}
		fastFT {
			items(limit: 20) {
				... Basic
			}
		}
		editorsPicks {
			title
			items(limit: 6) {
				... Basic
				... ExtendedSmallImage
				... Related
			}
		}
		opinion {
			url
			items {
				... Basic
				... Extended
				... Related
				branding {
					headshot
					taxonomy
			    }
			}
		}
		videos(limit: 6) {
			id
			title
			image {
				rawSrc
			}
			renditions {
				url
				frameWidth
				videoCodec
			}
		}
		technology {
			url
			items(limit: 2, genres: ["analysis", "comment"]) {
				... Basic
				... Extended
			}
		}
		markets {
			url
			items(limit: 2, genres: ["analysis", "comment"]) {
				... Basic
				... Extended
			}
		}
		lifestyle {
			url
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

	${basicFragments}

	query mostPopular {
		popularFromHui(${facet}: "${uuid}") {
			... Basic
			... Extended
		}
	}
`);

// fastFT query
const fastFT = `
	query FastFT {
		fastFT {
			items(limit: 5) {
				id
				title
				lastPublished
			}
		}
	}
`;

const popularTopics = `
	query PopularTopics {
		popularTopics(limit: 4) {
			id
			name
		}
	}
`;

export default {
	frontPage,
	newFrontPage,
	fastFT,
	mostPopular,
	popularTopics
};
