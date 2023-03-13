import express, { urlencoded } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors"
import userRouter from "./routes/user.js"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
const app=express()

app.use(morgan("dev"))

app.use(express.json({limit:"50mb",extended:true}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use(cors())
app.use("/users",userRouter) //url--https://localhost:5000/users/signup,
                                    //https://localhost:5000/users/signup

const port=process.env.SERVER_PORT;

const mongo_url=process.env.MONGO_URL
mongoose.connect(mongo_url).then(()=>{
    app.listen(port,()=>{
        console.log(`server connect with port ${port}`)
    })
}).catch((error)=>{
    console.log((error))
})