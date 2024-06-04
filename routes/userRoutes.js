const express=require('express')
const {signupcontroller,logincontroller}=require('../controller/userCtrlr')

const router=express.Router()

router.post('/signup',signupcontroller)
router.post('/login',logincontroller)

module.exports=router
