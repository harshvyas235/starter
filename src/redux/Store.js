// import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/cartSlice";

//  export const store = configureStore({
//     reducer:{
//         cart:CartSlice

//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import authSlice from "./Slices/authSlice";
import profileSlice from "./Slices/profileSlice";


export const store = configureStore({
    reducer : {
        cart : cartSlice,
        auth : authSlice,
        profile: profileSlice
    }
})