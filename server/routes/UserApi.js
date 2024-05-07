// Import the required modules
const express = require("express")
const { login, signUp, optGen } = require("../controller/AuthController")
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


module.exports = router