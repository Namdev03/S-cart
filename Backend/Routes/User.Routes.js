const route = require('express').Router()
const {registerUser,loginUser,logoutUser,verifyuser} =require('../Controller/User..Controller')
//==========user end points======
route.post('/',registerUser)
route.post('/login',loginUser)
route.get('/logout',logoutUser)
route.get('/verify',verifyuser)
module.exports = route