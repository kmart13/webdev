const http = require('http');
const react = require('./react/App.jsx');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  react.render()
});

server.listen(port, hostname, () => {
  console.log(`Node app is running at http://${hostname}:${port}/`);
});
