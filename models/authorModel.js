const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const authorSchema=new Schema({
authorname : {
    type:String,
    require:true
},
email : {
    type : String,
    require :true
},
password : {
    type : String,
    require : true
}
});

const Author= mongoose.model('Author',authorSchema);
module.exports={Author}