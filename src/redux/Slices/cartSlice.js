import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export const cartSlice = createSlice({
    name : "cart",
    initialState : JSON.parse(localStorage.getItem('cart')) || [], // Initialize cart state from local storage
    reducers: {
        add : (state,action)=>{
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state)); // Update local storage with the new cart state
            toast.success('Item added to cart successfully');
        },
        remove : (state,action)=>{
            const updatedCart = state.filter( (item)=> item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage with the updated cart state
            toast.success('Item removed from cart successfully');
            return updatedCart;
        },
    },
});

export default cartSlice.reducer;
export const {add,remove} = cartSlice.actions;
