import { createSlice } from "@reduxjs/toolkit";


const Feature = createSlice({
    name: 'User',
    initialState: {
        user:{},
        userToken: ''
    },
    reducers: {
        userData : (state,{payload})=>{
            state.user = payload
        },
        userToken: (state,{payload})=>{
            state.userToken = payload
        }
    }
})

export const {userData,userToken} = Feature.actions;
export default Feature.reducer;