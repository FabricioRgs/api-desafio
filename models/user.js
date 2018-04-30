var db=require('../dbconnection'); //reference of dbconnection.js
 
var User={
    
    auth:function(tel, password, callback) {
        return db.query("Select * from users where tel=? and password=?", [tel, password],callback);
    },

    getAllUsers:function(callback){
        return db.query("Select * from users",callback);
    },

    getUserById:function(id,callback){
        return db.query("select * from users where tel=?",[id],callback);
    },

    addUser:function(User,callback){
        return db.query("Insert into users values(?,?,?)",[User.Id,User.Title,User.Status],callback);
    },

    deleteUser:function(id,callback){
        return db.query("delete from users where Id=?",[id],callback);
    },

    updateUser:function(id,User,callback){
        return db.query("update users set Title=?,Status=? where Id=?",[User.Title,User.Status,id],callback);
    }
 
};
 module.exports=User;