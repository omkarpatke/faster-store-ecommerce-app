import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addProductToCart(state , action){
            return [...state ,action.payload];
        },

        removeProductFromCart(state,action){
            return [...state.filter(item => item._id !== action.payload)]
        },

        addProductQuantity(state , action){
            return [...state.map(item => item._id === action.payload ? {...item, quantity: item.quantity + 1 } : item)]
        },

        reduceProductQuantity(state , action){
            return [...state.map(item => item._id === action.payload ? {...item, quantity: item.quantity - 1 } : item)]
        },

        clearCart(state){
            return [...state.filter(item => item._id === 'forClearPusrpose')]
        },

    }
})

export const { addProductToCart, removeProductFromCart ,addProductQuantity, reduceProductQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;

