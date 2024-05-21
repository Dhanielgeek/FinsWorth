import { createSlice } from "@reduxjs/toolkit";


const featureSlice = createSlice({
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

export const {userData,userToken} = featureSlice.actions;
export default featureSlice.reducer;