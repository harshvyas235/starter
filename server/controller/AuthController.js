const Otp = require("../model/otp");
const otpGenrator= require("otp-generator")
const User = require("../model/user")
const bcrypt = require("bcrypt")
require("dotenv").config();
const jwt = require("jsonwebtoken")
const mailSender= require("../utils/mailSender")


exports.optGen = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(500).json({
                success: false,
                message: "This email is already in use."
            });
        }

        let otp = otpGenrator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });

        let result = await Otp.findOne({ otp });
        while (result) {
            otp = otpGenrator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });
            result = await Otp.findOne({ otp });
        }

        const otpPayload = { email, otp };
        const otpCreate = await Otp.create(otpPayload);

        res.status(200).json({
            success: true,
            message: "OTP created successfully",
            otpCreate
        });
    } catch (err) {
        console.error("Error in OTP creation:", err.message);
        res.status(500).json({
            success: false,
            message: "Error occurred during OTP generation.",
            error: err.message
        });
    }
};



exports.signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, otp } = req.body;
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "Please fill in all the details."
            });
        }

        if (password !== confirmPassword) {
            return res.status(403).json({
                success: false,
                message: "Password and confirm password do not match. Please re-enter the password."
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(500).json({
                success: false,
                message: "This user already exists."
            });
        }

        let hashPassword;
        try {
            hashPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing the password.",
                error: err.message
            });
        }

        const findOtp = await Otp.findOne({ email }).sort({ createdAt: -1 }).limit(1);
        if (!findOtp || otp !== findOtp.otp) {
            return res.status(400).json({
                success: false,
                message: "The OTP is not valid."
            });
        }

        const addUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`
        });

        res.status(200).json({
            success: true,
            message: "Account created successfully.",
            addUser
        });
    } catch (err) {
        console.error("Error in signUp:", err.message);
        res.status(500).json({
            success: false,
            message: "Error occurred during sign up.",
            error: err.message
        });
    }
};





exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password."
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found. Please sign up first."
            });
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "24hr" });
            user.password = undefined;
            const options = { expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), httpOnly: true };
            res.cookie("token", token, options).status(200).json({
                success: true,
                message: "Cookie created successfully.",
                user,
                token
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Incorrect password."
            });
        }
    } catch (err) {
        console.error("Error in login:", err.message);
        res.status(500).json({
            success: false,
            message: "Error occurred during login.",
            error: err.message
        });
    }
};

exports.getUser = async(req,res)=>{
    try{
        const {email}= res.body
        
        const userData = await User.findOne({email:email})

        if(userData===null){
            return res.status(404).json({
                success:false,
                message: "user is not found",
            })
        }

        return res.status(200).json({
            success:true,
            userData
        })
    }
    catch (err) {
        console.error("Error in user data:", err.message);
        res.status(500).json({
            success: false,
            message: "Error occurred during get.",
            error: err.message
        });
    }
}