const blogController= require('../controllers/blogControllers');
const express= require('express');
const router= express.Router();
const passport= require('passport');
require('../middlewares/passport')(passport);
const passportAuth= passport.authenticate('jwt',{"session":false})


//=================================== To blog ===========================================================>>>>>
router.post('/createblog',passportAuth,blogController.addBlog);
router.post('/addcomment',passportAuth,blogController.postComment);





module.exports=router;