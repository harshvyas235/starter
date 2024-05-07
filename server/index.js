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

// Enable CORS
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

// Routes
const userRoute = require("./routes/UserApi");
app.use("/api/v1/auth", userRoute);

// Start the server
app.listen(Port, () => {
    console.log(`App is running at ${Port}`);
});
