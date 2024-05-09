

import { createSlice } from "@reduxjs/toolkit";
// import user from "../../../server/model/user";

const initialState={
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state, action) {
            state.user = action.payload; // Update user directly to the payload
          },
        dataUser(state){
            console.log(state.user)
        }
    }
})

export const {setUser,dataUser} = profileSlice.actions;
export default profileSlice.reducer;