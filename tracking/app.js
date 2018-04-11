var fs = require('fs');
var http = require('http');
var express = require('express');

var client = require('mysql').createConnection({
    user: 'root',
    password: 'dnjs9154ehd',
    database: 'location'
})

var app = express();
var server = http.createServer(app);

app.get('/tracker', function(request, response){
    fs.readFile('Tracker.html', function(error, data){
        response.send(data.toString());
    })
})

app.get('/observer', function(request, response){
    fs.readFile('Observer.html', function(error, data){
        response.send(data.toString());
    })
})

app.get('/showdata', function(request, response){
    client.query('select * from locations where name=?', [request.params.name], function(error, data){
        response.send(data);
    })
})

server.listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
})

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    socket.on('join', function(data){
        socket.join(data);
    })

    socket.on('location', function(data){
        client.query('insert into locations(name, latitude, longitude, date) values(?,?,?, NOW())',[data.name, data.latitude, data.longitude]);

        io.sockets.in(data.name).emit('receive', {
            latitude:data.latitude,
            longitude: data.longitude,
            date: Date.now()
        })
    })
})