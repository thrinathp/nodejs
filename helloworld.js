var http = require('http');


var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/plain'})
    res.end('hello world');
})
server.listen(3000,'127.0.0.1');
console.log('now server is listening on port 3000')