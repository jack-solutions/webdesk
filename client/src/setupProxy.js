// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // This matches any request starting with /api
    createProxyMiddleware({
      target: 'http://localhost:5000', // Replace with your backend API
      changeOrigin: true,
    })
  );
};
