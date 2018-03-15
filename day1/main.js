// 모듈을 추출할때에는 require() 함수를 사용한다.

var module = require('./module.js');

console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d',module.circleArea(3));