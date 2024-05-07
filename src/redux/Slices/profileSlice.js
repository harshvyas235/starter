

import { createSlice } from "@reduxjs/toolkit";
// import user from "../../../server/model/user";

const initialState={
    user:null,
};

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user = { ...state.user, ...value.payload };
           
        }
    }
})

export const {setUser} = profileSlice.actions;
export default profileSlice.reducer;