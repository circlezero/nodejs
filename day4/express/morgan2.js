var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan(':method + :date'));
app.use(function(request, response){
    resopnse.send('<h1>express Baisc</h1>');
})

app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
})
