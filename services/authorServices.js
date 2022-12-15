const {Author} = require('../models/authorModel');

module.exports.register =(data)=>{
    return new Promise((resolve)=>{
          Author.create({authorname:data.authorname,email:data.email,password:data.password},(err,result)=>{
            if(err) throw err;
            else{
                resolve(result);
            }
          })
    })
}