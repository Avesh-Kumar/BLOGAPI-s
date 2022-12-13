const authorService= require('../services/authorServices')
exports.register=async(req,res)=>{
  let data= await authorService.register(req,res);
  res.render('home',{title:'author register successfully'});
};


exports.getSignupForm = (req,res)=>{
    res.render('sign-up');
}
