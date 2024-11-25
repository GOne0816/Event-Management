const express = require('express')
const router = express.Router()
const {signup,login} = require('../controller/userAuth');
const signupSchema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middlewares')
const {createEvent,showEvent} = require('../controller/eventsAuth')


//<---------------------------------------Routers---------------------------------------------------->


router.post('/signup',validate(signupSchema),signup);
router.post('/login',login);
router.post('/createEvent',createEvent);
router.get('/showEvent',showEvent)



module.exports = router;
