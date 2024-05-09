// Import the required modules
const express = require("express")
const { login, signUp, optGen, getUser } = require("../controller/AuthController")
const { resetPasswordToken, resetPasswor } = require("../controller/ResetPassword")
// const { login, signUp, optGen} = require("../controller/AuthController")

const router = express.Router()


// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signUp)

// Route for sending OTP to the user's email
router.post("/sendotp", optGen)

router.get("/getdata",getUser)

router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPasswor)


module.exports = router