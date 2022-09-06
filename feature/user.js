import { createSlice } from "@reduxjs/toolkit";
const userEmail = ''
const userSlice = createSlice({
    name:'user',
    initialState: userEmail,
    reducers: {
        login: (state,action)=>{
            state.userEmail = action.payload;
        },
        logout: (state)=>{
            state.userEmail = userEmail;
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer