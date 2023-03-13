import express, { urlencoded } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors"
import userRouter from "./routes/user.js"

const app=express()

app.use(morgan("dev"))

app.use(express.json({limit:"50mb",extended:true}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use(cors())
app.use("/users",userRouter) //url--https://localhost:5000/users/signup,
                                    //https://localhost:5000/users/signup

const port=5000;

const mongo_url="mongodb+srv://ankit:ankit12345@cluster0.ojralhz.mongodb.net/tour_db?retryWrites=true&w=majority"
mongoose.connect(mongo_url).then(()=>{
    app.listen(port,()=>{
        console.log(`server connect with port ${port}`)
    })
}).catch((error)=>{
    console.log((error))
})