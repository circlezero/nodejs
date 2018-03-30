var express = require('express');

var app = express();

app.use(function(request, response){

    response.status(404).send('<h1>ERROR</h1>');

    // date create
    var output = [];
    for(var i=0; i<3; i++){
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }

    //response
    response.send(output);


    // response.writeHead(200, {'Content-Type' : 'text/html'});
    // response.end('<h1>Hello express</h1>');
})

app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
})