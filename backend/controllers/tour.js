import tourModal from "../models/tour.js";

export const createTour=async(req,res)=>{
    const tour=req.body

    const newTour=new tourModal({
        ...tour,
        creator: req.userId,
        createdAt: new Date().toISOString(),
    })
    try {
        await newTour.save()
        res.status(200).json(newTour)
        
    } catch (error) {
        res.status(400).json({message:"somthing went wrong"})
    }
    
}

export const getTours=async(req,res)=>{
    try {
        const allTours=await tourModal.find()

        res.status(200).json(allTours)
        
    } catch (error) {
        res.status(400).json({message:"somthing went wrong"})
    }
    
}