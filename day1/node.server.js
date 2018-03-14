var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })
    res.end('<h1>Hello World...!</h1>');
}).listen(9999, function() {
    console.log('Server running at http://127.0.0.1:9999/');
});