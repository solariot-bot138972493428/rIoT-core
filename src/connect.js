var app = require('express')();
var http = require('http').Server(app);
const os = require('os');

console.log(os.arch());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());

app.get('/', function(req, res){
  res.send('Hello world!');
});

function startAdmin(portAdmin) {
http.listen(portAdmin, function(){
  console.log('listening on *: ' + portAdmin);
});
}
