const http = require('http');
const { log } = require('./utils/logger');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  log(`Incoming request: ${pathname}`, 'REQUEST');

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Smart Utility Toolkit!');
  } else if (pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About page for the Smart Utility Toolkit.');
  } else if (pathname === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact us: support@smarttoolkit.local');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Error: Page not found.');
  }
});

server.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}`, 'SERVER');
});
