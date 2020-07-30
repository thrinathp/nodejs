var http = require('http'); // http module
var fs = require('fs'); // fs module
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
    
  });
}).listen(3000,'127.0.0.1');
console.log('now the server is listening on port 3000');