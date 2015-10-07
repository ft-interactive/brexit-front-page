const getData = query => {
	return fetch(`https://next-graphql-api.ft.com/apiKey=${process.env.GRAPHQL_API_KEY}`,
		{
			method: 'POST',
			body: JSON.stringify({
				query: query
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json());
};

export default getData;
