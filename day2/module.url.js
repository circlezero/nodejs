var url = require('url');

var parsedObject = url.parse('http://hanbit.co.kr/store/books/look.php?p_code=B4250257160', true);
console.log(parsedObject);
