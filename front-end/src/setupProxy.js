const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		createProxyMiddleware(
			'/api', {
				target: 'http://localhost:5445',
				pathRewrite: {
					'^/api': ''
				}
			}
		)
	)
	app.use(
		createProxyMiddleware(
			'/auth', {
				target: 'http://localhost:8888',
				pathRewrite: {
					'^/auth': '/login'
				}
			}
		)
	)
}
