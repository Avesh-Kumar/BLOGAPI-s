const {Author} = require('../models/authorModel');

module.exports.register =(req,res)=>{
    return new Promise((resolve)=>{
          Author.create({authorname:req.body.authorname,email:req.body.email,password:req.body.password},(err,result)=>{
            if(err) throw err;
            else{
                resolve(result);
            }
          })
    })
}