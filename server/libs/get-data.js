import { logger } from 'ft-next-express';

const getData = (query, flags) => {
	const xFlagsHeader = Object.keys(flags).map(flag => `${flag}:${flags[flag] ? 'on' : 'off'}`).join(',');
	return fetch(`https://next-graphql-api.ft.com/?apiKey=${process.env.GRAPHQL_API_KEY}`,
		{
			method: 'POST',
			body: JSON.stringify({
				query: query
			}),
			headers: {
				'Content-Type': 'application/json',
				'X-Flags': xFlagsHeader
			},
			timeout: 3000
		})
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw Error(`Failed getting data from graphql api (${response.status}: ${response.statusText})`)
			}
		})
		.catch(err => {
			logger.error(err.message);
			return {};
		});
};

export default getData;
