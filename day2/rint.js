const EventEmitter = require('events');
var myEvent = new EventEmitter();

exports.timer = myEvent;

setInterval(function(){
    exports.timer.emit('tick');
}, 1000);