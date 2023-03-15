import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../api"

export const login=createAsyncThunk("auth/login",async({formValue,navigate,toast}, { rejectWithValue })=>{
    try {
        const response=await api.signIn(formValue)
        toast.success("login successful")
        navigate("/")

        return response.data
        
        
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }
})

export const signup=createAsyncThunk("auth/signup",async({formValue,toast,navigate},{rejectWithValue})=>{
    try {
        const response=await api.signUp(formValue)
        toast.success("user successfully register")
        navigate("/login")

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

 

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:null,
        loading:false,
        error:null
    },
    reducers: {
        setUser: (state, action) => {
          state.user = action.payload;
        },
        setLogout: (state, action) => {
          localStorage.clear();
          state.user = null;
        },
      },
    extraReducers:{
        [login.pending]:(state,action)=>{
            state.loading=true
        },
        [login.fulfilled]:(state,action)=>{
            state.loading=false
            localStorage.setItem("profile",JSON.stringify({...action.payload}))
            state.user=action.payload
        },
       
        [login.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload.message
        },

        [signup.pending]:(state,action)=>{
            state.loading=true
        },
        [signup.fulfilled]:(state,action)=>{
            state.loading=false
            state.user=action.paylaod
        },
        [signup.rejected]:(state,action)=>{
            state.loading=false
            state.error=action.payload.message
        }
    }

})

export const {setUser,setLogout} =authSlice.actions
export default authSlice.reducer