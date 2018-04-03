var fs = require('fs');
var express = require('express');
var ejs = require('ejs');
var http = require('http');

var counter = 0;
function Product(name, image, price, count) {
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

var products = [
    new Product('Apple', 'food.jpg', 28000, 30),
    new Product('Banana', 'food.jpg', 30000, 30),
    new Product('Pizza', 'food.jpg', 18000, 30),
    new Product('Hamburger', 'food.jpg', 20000, 30),
    new Product('Bluebarry', 'food.jpg', 17000, 30),
    new Product('Strawbarry', 'food.jpg', 22000, 30),
    new Product('Fish', 'food.jpg', 38000, 30),
    new Product('Bread', 'food.jpg', 8000, 30)
]

var app = express();
var server = http.createServer();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    var htmlPage = fs.readFileSync('HTMLPage.html', 'utf8');

    response.send(ejs.render(htmlPage, {
        products: products
    }))
})

server.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
})

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    function onReturn(index) {
        products[index].count++;

        clearTimeout(cart[index].timerID);

        delete cart[index];

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        })
    }

    var cart = {};

    socket.on('cart', function(index){
        products[index].count--;

        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function(){
            onReturn(index);
        }, 10 * 60 * 1000);

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        })
    })

    socket.on('buy', function(index){
        clearTimeout(cart[index].timerID);

        delete cart[index];

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        })
    })

    socket.on('return', function(index){
        onReturn(index);
    })
})



