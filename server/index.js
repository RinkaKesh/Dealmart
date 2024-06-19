const express=require("express")
const app=express()
app.use(express.json())
const cookieParser=require("cookie-parser")
app.use(cookieParser())
require("dotenv").config()
const {connection}=require("./config/connection")
const { authRoute } = require("./route/authRoute")

const PORT=process.env.PORT

app.use("/user",authRoute)

app.listen(PORT,async()=>{
    try {
        await connection
        console.log(`app is running on port ${PORT} and db also connected`);
    } catch (error) {
        console.log(error);
    }
})