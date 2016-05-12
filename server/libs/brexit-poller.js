export const start = () => new Promise(resolve => {
	console.log('pretending to do first poll for brexit data, 2 seconds...', String(new Date()));

	setTimeout(() => {
		console.log('pretend poll done!', String(new Date()));
		resolve({ foo: 123 });
	}, 2000);
});
