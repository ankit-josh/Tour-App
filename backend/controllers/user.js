
import bcrypt from "bcryptjs"
import UserModal from "../models/user.js"
import  jwt  from "jsonwebtoken"

const secret="test"

export const signin=async(req,res)=>{

    const {email,password}=req.body
    try {
       const oldUser=await UserModal.findOne({email}) 
       

        if(!oldUser){
            res.status(400).json({message:"email doesnot exist"})
        }
        const isCorrectPassword=await bcrypt.compare(password,oldUser.passowrd)

        if (!isCorrectPassword){
            res.status(400).json({message:"invalid password"})
        }

        const token=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:"1d"})
        res.status(200).json({result:oldUser,token})

    } catch (error) {
        res.status(400).json({message:error})
    }
}

export const signup=async(req,res)=>{
    const {firstName,lastName,email,password}=req.body

    try {
        const oldUser=await UserModal.findOne({email})
        
        if (oldUser){
            res.status(400).json({message:"email already exist"})
        }
        const hashedPassword=await bcrypt.hash(password, 12)

        const result= await UserModal.create({
            email,
            passowrd:hashedPassword,
            name:`${firstName} ${lastName}`
        })
       
        const token=jwt.sign({email:result.email,id:result._id},secret,{expiresIn:'1d'})

        res.status(200).json({result,token})

    } catch (error) {
        res.status(500).json({message:error})
    }
}
