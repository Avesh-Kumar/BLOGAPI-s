const authorService= require('../services/authorServices')
exports.register=async(req,res)=>{
  await authorService.register(req.body);
  res.render('home',{title:'author register successfully'});
};

exports.getSignupForm = (req,res)=>{
    res.render('sign-up');
}
