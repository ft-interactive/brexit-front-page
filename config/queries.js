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
	`
};

// Produces a front page query for a given region
const frontPage = (region) => (`
	${fragments.basic}
	${fragments.extended}
	${fragments.related}

	query FrontPage {
		topStory: top(region: ${region}){
			items(limit: 1) {
				... Basic
				... Related
				... on LiveBlog {
					status
					updates(limit: 1) {
						date
						text
					}
				}
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
				... on LiveBlog {
					status
					updates(limit: 1) {
						date
						text
					}
				}
			}
		}
		topStoriesList(region: ${region}) {
			layoutHint
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
				... Extended
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
	${fragments.basic}
	${fragments.extended}

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

export default {
	frontPage,
	fastFT,
	mostPopular,
	popularTopics,
	popularArticles
};
