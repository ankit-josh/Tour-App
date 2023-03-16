import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/AuthSlice"
import tourReducer from "./feature/TourSlice"

export default configureStore({
    reducer:{
        auth:authReducer,
        tour:tourReducer
    },
    
})