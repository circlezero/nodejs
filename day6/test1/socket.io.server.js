var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(request, response){
    fs.readFile('HTMLPage.html', function(error, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    })
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
})

var id = 0;
var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
    
    socket.on('circle', function(data){
        // public
        // io.sockets.emit('smart', data);

        // broadcast
        // socket.broadcast.emit('smart', data);

        // private
        id = socket.id;
        socket.on('circle', function(data){
            io.sockets.to(id).emit('smart', data);
        })
    })
})