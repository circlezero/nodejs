var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'root',
    password: 'dnjs9154ehd'
})

client.query('use company');
client.query('select * from products', function(error, result, fields){
    if(error){
        console.log('쿼리 문장에 오류가 있습니다.');
    } else {
        console.log(result);
    }
})