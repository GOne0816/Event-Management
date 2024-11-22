const express = require('express')
const router = express.Router()
const {signup,login} = require('../controller/userAuth');
const signupSchema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middlewares')

router.post('/signup',validate(signupSchema),signup);
router.post('/login',login);


module.exports = router;
