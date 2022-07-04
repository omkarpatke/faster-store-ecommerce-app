import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addProductToWishlist(state , action){
            return [...state , action.payload];
        },

        removeProductFromWishlist(state, action){
            return [...state.filter(item => item._id !== action.payload)]; 
        },

    }
})

export const { addProductToWishlist , removeProductFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;