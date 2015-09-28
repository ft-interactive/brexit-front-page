import proxy from 'http-proxy';

const devServerProxy = proxy.createProxyServer();

const devProxy = (devPort = 8888) => {
	return (req, res, next) => {
		devServerProxy.web(req, res, { target: 'http://localhost:' + devPort + '/front-page/' }, (err) => {
			console.log('Proxy error', err);
		});
	};
}

export default devProxy;
