const blogController=require('../controllers/blogControllers');
const userController = require('../controllers/userControllers');
const  express=require('express')
const  router= express.Router();


//============================= only for blogger controller================================================>
router.post('/register',userController.signup);
router.post('/login',userController.userLogin);
router.get('/getAllUsers',userController.allUsers);













module.exports=router;