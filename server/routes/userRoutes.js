const express = require('express')
const router = express.Router()
const {signup,getdata} = require('../controller/userAuth');

router.post('/signup',signup);


module.exports = router;
