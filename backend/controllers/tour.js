import mongoose from "mongoose";
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

export const getTour = async (req, res) => {
    const { id } = req.params
    
    try {
      const tour = await tourModal.findById(id)
   
      res.status(200).json(tour);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
  };

  export const getToursByUser = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({message:"user doesn't exist"})
    }
    const userTours=await tourModal.find({creator:id})
    return res.status(200).json(userTours)
  };
  
  export const deleteTour = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({message:"user doesn't exist"})
    }
    await tourModal.findByIdAndRemove(id)
    return res.status(200).json({message:"tour deleted successfully"})
  };

  export const updateTour = async (req, res) => {
    const { id } = req.params;
    const { title, description, creator, imageFile, tags } = req.body;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No tour exist with id: ${id}` });
      }
  
      const updatedTourData = {
        creator,
        title,
        description,
        tags,
        imageFile,
        _id: id,
      };
      await tourModal.findByIdAndUpdate(id, updatedTourData, { new: true });
      res.json(updatedTour);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
  };