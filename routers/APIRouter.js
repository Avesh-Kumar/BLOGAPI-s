const blogController=require('../controllers/blogControllers');
const userController = require('../controllers/userControllers');
const  express=require('express')
const  router= express.Router();
const passport= require('passport');
require('../middlewares/passport')(passport);
const passportAuth= passport.authenticate('jwt',{"session":false})


//============================= only for blogger controller================================================>
router.post('/register',userController.signup);
router.post('/login',userController.userLogin);
router.get('/getAllUsers',passportAuth,userController.allUsers);













module.exports=router;