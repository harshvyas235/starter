// import { createSlice } from "@reduxjs/toolkit";


// export const CartSlice = createSlice({
//     name:"cart",
//     initialState:[],
//     reducers:{
//         add:(state,action) => {
//             state.push(action.payload)
//         },
//         remove:(state,action) => {
//             return state.filter((item)=> item.id != action.payload)
//         },
//     }
// });

// export const {add, remove} = CartSlice.actions;
// export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers: {
        add : (state,action)=>{
            state.push(action.payload)
        },
        remove : (state,action)=>{
            return state.filter( (item)=> item.id !== action.payload)
        },
    },
})

export default cartSlice.reducer;
export const {add,remove} = cartSlice.actions;