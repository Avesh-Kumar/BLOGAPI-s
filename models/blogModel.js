const { mongoose } = require('mongoose');
// const db=require('./db');
const Schema = mongoose.Schema;
const blogSchema=  new Schema({
    author:{
        type:String,
        require:true,
        unique:true
    }
})
const Blog = mongoose.model('Blog',blogSchema);
module.exports={Blog};