var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}))

app.use(function(request, response){
    request.session.now = (new Date()).toUTCString();

    response.send(request.session);
})

app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
})