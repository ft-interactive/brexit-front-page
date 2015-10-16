const fragments = `
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
		popularTopics {
			name
			url
		}
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
		popular {
			items(limit: 10) {
				... Basic
			}
		}
		videos {
			id
			title
			description
			lastPublished
			image {
				src(width: 320)
				alt
			}
		}
	}
`);

const newFrontPage = (region) => (`
	${fragments}

	query FrontPage {
		popularTopics {
			name
			url
		}
		top(region: ${region}) {
			items(type: Article) {
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
		}
		fastFT {
			items {
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
			}
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

export default {
	frontPage,
	newFrontPage,
	fastFT
};
