var rint = require('./rint.js');

rint.timer.on('tick', function(code){
    console.log('이벤트를 실행합니다.');
})