var http = require('http').Server(app);
var app = require('express')();
const os = require('os');

console.log(os.arch());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());

app.get('/', function(req, res){
  res.send('Hello world!');
});
