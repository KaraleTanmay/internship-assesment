const express = require('express');
const usercontroller = require('../controllers/usercontroller');

const userRouter = express.Router()

userRouter.post("/paymentmade", usercontroller.increment);
userRouter.post("/createUser", usercontroller.createUser)

module.exports = userRouter