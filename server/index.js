const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Set the port for the server
const Port = process.env.PORT || 4000;

// Connect to the database
database.connect();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

// Enable CORS
app.use(
    cors({
        origin:"https://starter-two-ruby.vercel.app/",
        methods:["POST","GET"],
        credentials:true,
        allowedHeaders: ["Content-Type", "Authorization"], // Add allowed headers if needed
    })
)

// Routes
const userRoute = require("./routes/UserApi");
app.use("/api/v1/auth", userRoute);

// Start the server
app.listen(Port, () => {
    console.log(`App is running at ${Port}`);
});
