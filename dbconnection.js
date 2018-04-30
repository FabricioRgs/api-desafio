var mysql=require('mysql');
var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'0403',
 database:'desafio'
 
});
module.exports=connection;