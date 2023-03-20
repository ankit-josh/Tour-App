import express from "express"
const router = express.Router()
import { createTour, getTours,getTour, getToursByUser, deleteTour, updateTour } from "../controllers/tour.js"
import auth from "../middleware/auth.js"


router.post("/", auth, createTour);
router.get("/",getTours)
router.get("/:id",getTour)
router.get("/userTours/:id",getToursByUser)
router.delete("/:id",auth,deleteTour)
router.patch("/:id",auth, updateTour);


export default router