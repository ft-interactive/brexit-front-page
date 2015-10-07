const getData = query => {
	return fetch('http://ft-next-graphql-api.herokuapp.com/',
		{
			method: 'POST',
			body: JSON.stringify({
				query: query
			}),
			headers: {
				'FT-Next-Backend-Key': process.env.FT_NEXT_BACKEND_KEY,
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json());
};

export default getData;
