const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://hamzamain-spec.github.io',
  changeOrigin: true
}));

app.listen(process.env.PORT || 10000, () => {
  console.log('Proxy running');
});
