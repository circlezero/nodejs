var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){

    // if(request.method == 'GET') {
    //     console.log('Get 요청입니다.');
    // } else if(request.method == 'POST'){
    //     console.log('POST 요청입니다.');
    // }

    // var pathname = url.parse(request.url).pathname;

    // if(pathname == '/') {
    //     fs.readFile('Index.html', function(error, data){
    //         response.writeHead(200, {'Content-Type' : 'text/html'});
    //         response.end(data);
    //     })
    // } else if (pathname == '/OtherPage'){
    //     fs.readFile('OtherPage.html', function(error, data){
    //         response.writeHead(200, {'Content-Type' : 'text/html'});
    //         response.end(data);
    //     })
    // }

    var query = url.parse(request.url, true).query;
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
    
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
})