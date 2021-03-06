const fragments = {
	basic: `
		fragment Basic on Content {
			type: __typename
			id
			title
			published
			lastPublished
		}
	`,
	extended: `
		fragment Extended on Content {
			summary
			isEditorsChoice
			primaryTheme {
				id
				url
				name
				taxonomy
			}
			primarySection {
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
	opinionData: `
		fragment OpinionData on Content {
			authors {
				name
				url
				headshot
				isBrand
			}
			tags(only: ["genre", "brand"]) {
				name
				taxonomy
				url
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
const frontPage = `
	${fragments.basic}
	${fragments.extended}
	${fragments.related}
	${fragments.opinionData}
	${fragments.liveBlog}

	query FrontPage($region: Region!) {
		brexitCoverage {
			items(limit: 6) {
				... Basic
				... Extended
				... OpinionData
				... LiveBlogInfo
			}
		}
		brexitBuildup {
			items(limit: 5) {
				... Basic
				... Extended
				... OpinionData
				... LiveBlogInfo
			}
		}
		topStory: top(region: $region){
			items(limit: 1) {
				... Basic
				... Extended
				... Related
				... OpinionData
				... LiveBlogInfo
				primaryTheme {
					items(limit: 4) {
						id
						title
					}
				}
				primarySection {
					items(limit: 4) {
						id
						title
					}
				}
			}
		}
		top(region: $region) {
			items {
				... Basic
				... Extended
				... Related
				... OpinionData
				... LiveBlogInfo
			}
		}
		topStoriesList(region: $region) {
			layoutHint
			items {
				... Basic
				... Extended
				... Related
				... OpinionData
				... LiveBlogInfo
			}
		}
		fastFT(limit: 6) {
			... Basic
		}
		opinion {
			items(limit: 8) {
				... Basic
				... Extended
				... Related
				... OpinionData
				branding {
					headshot
				}
			}
		}
		popularTopics(limit: 3) {
			type: __typename
			id
			name
			url
			taxonomy
			items(limit: 4) {
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
		editorsPicks {
			title
			items(limit: 6) {
				... Basic
				... Extended
				... Related
				... OpinionData
			}
		}
		popularArticles(limit: 6) {
			... Basic
			... Extended
			... OpinionData
		}
		technology {
			items(limit: 4) {
				... Basic
				... Extended
				... OpinionData
			}
		}
		markets {
			items(limit: 4) {
				... Basic
				... Extended
				... OpinionData
			}
		}
		lifestyle {
			items(limit: 2) {
				... Basic
				... Extended
				... OpinionData
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

	query MyFT($uuid: String) {
		popularTopics(limit: 4) {
			... Basic
		}
		user(uuid: $uuid) {
			viewed(limit: 4) {
				... Basic
			}
			followed(limit: 4) {
				... Basic
			}
		}
	}
`;

export default { frontPage, user };
