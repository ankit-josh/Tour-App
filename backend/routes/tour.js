import express from "express"
const router = express.Router()
import { createTour, getTours } from "../controllers/tour.js"


router.post("/createtour",createTour)
router.get("/gettours",getTours)

export default router