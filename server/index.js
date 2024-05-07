const express = require("express")
const app = express()
app.use(express.json());


// const shopingRoute = require("./routes/shopping")
const database = require("./config/database")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const cors = require("cors")


dotenv.config();
const Port = process.env.PORT || 4000
database.connect();
app.use(express.json());

app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

const userRoute = require("./routes/UserApi")
app.use("/api/v1/auth", userRoute);










app.listen(Port,()=>{
    console.log(`App is runing at ${Port}`)
})