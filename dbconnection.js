var mysql=require('mysql');
var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'4553',
 database:'desafio'
 
});
module.exports=connection;