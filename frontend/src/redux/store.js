import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/AuthSlice"

export default configureStore({
    reducer:{
        auth:authReducer
    },
    
})