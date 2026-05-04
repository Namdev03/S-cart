import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {register,login,logout,verify} from  '../Services/UserApis'
const  initialState ={
    isLoading : true,
    isLoginIn:false,
    userDetails:[],
    userId:""
}
const loginAsync = await createAsyncThunk("user/login",(payload)=>{
try {
    const response = await login(payload)
    return response.data
} catch (error) {
 return error.response.error.message
}
})
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginAsync.pending,(state)=>{
         state.isLoginIn = false
        }).addCase(loginAsync.fulfilled,(state,action)=>{
            state.isLoginIn = true
            state.userDetails = action.payload.data
        })
    }
})