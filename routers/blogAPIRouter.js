const blogController=require('../controllers/blogControllers');
const authorController = require('../controllers/authorControllers');
const  express=require('express')
const  router= express.Router();


//============================= only for blog controller================================================>
router.get('/',blogController.home);





//===========================author sign up =============================================================>
router.get('/signup',authorController.getSignupForm)



router.post('/sign-up',authorController.register);








module.exports=router;