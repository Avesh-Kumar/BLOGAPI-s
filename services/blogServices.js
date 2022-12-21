const { Promise } = require('mongoose');
const { Blog } = require('../models/blogModel');
const { User } = require('../models/userModel')



module.exports.addBlog = (data, user) => {
    return new Promise((resolve, reject) => {
        if (data.title) {
            User.findOne({ $and: [{ _id: user._id, isblogger: true }] }, (error, result) => {
                if (result) {
                    Blog.create({ title: data.title, blogger: result.username }, (error, result) => {
                       if(error)
                       {
                        reject(error)
                       }else{
                        resolve(result)
                       }
                    });
                }
                else {
                    reject("you are not a blogger")
                }
            })
        } else {
            reject("please provide blog");
        }
    })
};
module.exports.comment=(data,user)=>{
return new Promise((resolve,reject)=>{
    if(data){
    //  Blog.create({comments.[].title:data.title})
    }else{
        reject('please do any comment');
    }
    resolve(user)
})
}
