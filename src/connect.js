const http = require('http');
const os = require('os');

console.log(os.arch());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

function startAdmin(port, hostname) {
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
}
